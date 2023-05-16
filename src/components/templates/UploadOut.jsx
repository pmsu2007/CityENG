import {
  UploadInputDiv,
  UploadInputInnerDiv,
  UploadLabel,
  ProductAddDiv,
  ProductAddListDiv,
  ProductSelectListDiv,
  UploadAddButton,
} from "../../styledComponents";
import UploadSelect from "../atomics/select/UploadSelect";
import { useNavigate, useParams } from "react-router-dom";
import usePlaceList from "../../hooks/usePlaceList";
import { useState } from "react";
import ProductFilterInput from "../atomics/input/ProductFilterInput";
import ProductItem from "../atomics/pending/ProductItem";
import ProductSelectItem from "../atomics/pending/ProudctSelectItem";
import ProductTimeInput from "../atomics/input/ProductTimeInput";
import axios from "axios";
import { APIURL } from "../../config/key";
import Caution from "../organisms/common/Caution";
import { getCookie } from "../../config/cookie";
import ProductSelect from "../atomics/select/ProductSelect";
import { useEffect } from "react";

const UploadOut = ({ type }) => {
  const param = useParams();
  const teamId = param.team_id;
  const navigate = useNavigate();

  const places = usePlaceList(teamId);
 
  const [productToggle, setProductToggle] = useState(false);
  const [body, setBody] = useState({
    place: 0,
    memo: "",
    createdAt: "",
  });

  const [products, setProducts] = useState([]);

  const sendProductRequest = async () => {
    const res = await axios.get(
      `${APIURL}/api/teams/${teamId}/places/${body.place}/products/page`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 200) {
      setProducts(res.data.content);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    sendProductRequest();
  }, [body.place]);

  const [selectProducts, setSelectProducts] = useState([]);
  const [productId, setProductId] = useState([]);
  const [filter, setFilter] = useState("");
  const [values, setValues] = useState([]);

  const getSelectProduct = (obj) => {
    const findIdx = selectProducts.findIndex(
      (selectProduct) => selectProduct.productId === obj.productId
    );
    if (findIdx >= 0) {
      let copy = [...selectProducts];
      copy[findIdx].quantity = obj.quantity;
      copy[findIdx].toQuantity = obj.toQuantity;
      setSelectProducts(copy);
    } else {
      setSelectProducts([...selectProducts, obj]);
    }
  };

  const getProductId = (obj) => {
    if (!productId.includes(obj)) {
      setProductId([...productId, obj]);
    }
  };

  const getResult = (obj) => {
    setFilter(obj);
  };

  const deleteProductId = (obj) => {
    setProductId(productId.filter((i) => i !== obj));
  };

  const getBodyResult = (obj) => {
    const key = Object.keys(obj);
    setBody({ ...body, [key]: obj[key] });
  };

  const sendRequest = async () => {
    
    const res = await axios.post(
      `${APIURL}/api/teams/${teamId}/pending`,
      {
        id: body.place,
        type: type,
        createdAt: body.createdAt,
        memo: body.memo,
        products: selectProducts,
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 200) {
      navigate(`/team/${teamId}/inventory`);
      console.log("출고 성공");
    } else {
      console.log("출고 실패");
    }
  };

  const sendAttrValueRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/${teamId}/attrs`, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });
    console.log(res);
    if (res.status === 200) {
      setValues(res.data);
    } else {
      console.log("속성값 조회 실패");
    }
  };

  const onSubmit = () => {
    sendRequest();
  };

  useEffect(() => {
    sendAttrValueRequest();
  }, [])

  return (
    <>
      <UploadInputDiv>
        <Caution />
        <UploadInputInnerDiv>
          <UploadLabel>위치</UploadLabel>
          <UploadSelect
            options={places}
            name="place"
            getResult={getBodyResult}
          />
        </UploadInputInnerDiv>

        <UploadInputInnerDiv>
          <UploadLabel>날짜</UploadLabel>
          <ProductTimeInput name="createdAt" getResult={getBodyResult} />
        </UploadInputInnerDiv>
        <UploadInputInnerDiv>
          <UploadLabel>메모</UploadLabel>
          <ProductFilterInput name="memo" getResult={getBodyResult} />
        </UploadInputInnerDiv>
        <ProductAddDiv>
          <UploadInputInnerDiv
            onClick={() => {
              setProductToggle((e) => !e);
            }}
          >
            <UploadLabel>제품</UploadLabel>
            <ProductFilterInput name="product" getResult={getBodyResult} />
          </UploadInputInnerDiv>
          {productToggle ? (
            // 제품 검색할 때
            <>
              <ProductSelect
                options={values.length > 0 && values[1].values}
                name="filter"
                getResult={getResult}
              />
              <ProductAddListDiv>
                {products &&
                  products
                    .filter((product) => product.attributes[1].value == filter)
                    .map((product) => (
                      <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.imageUrl}
                        barcode={product.barcode}
                        places={product.places}
                        getResult={getProductId}
                        setToggle={setProductToggle}
                      />
                    ))}
              </ProductAddListDiv>
            </>
          ) : (
            <ProductSelectListDiv>
              {products &&
                products
                  .filter((product) => productId.includes(product.id))
                  .map((filterItem) => {
                    const quantity = filterItem.places.filter(
                      (place) => place.id === Number(body.place)
                    );
                    const productId = filterItem.id.toString();
                    return (
                      <>
                        <ProductSelectItem
                          key={filterItem.id}
                          id={productId}
                          name={filterItem.name}
                          quantity={quantity[0].quantity}
                          onClick={deleteProductId}
                          getResult={getSelectProduct}
                          place={body.place}
                        />
                      </>
                    );
                  })}
            </ProductSelectListDiv>
          )}
        </ProductAddDiv>
        <UploadAddButton onClick={onSubmit}> 등록 </UploadAddButton>
      </UploadInputDiv>
    </>
  );
};

export default UploadOut;
