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
import useProductList from "../../hooks/useProductList";
import ProductFilterInput from "../atomics/input/ProductFilterInput";
import ProductItem from "../atomics/pending/ProductItem";
import ProductMoveSelectItem from "../atomics/pending/ProductMoveSelectItem";
import ProductTimeInput from "../atomics/input/ProductTimeInput";
import axios from "axios";
import { APIURL } from "../../config/key";

const UploadMove = ({ type }) => {
  const param = useParams();
  const teamId = param.team_id;
  const navigate = useNavigate();

  const places = usePlaceList(teamId);
  const products = useProductList(teamId);

  const [productToggle, setProductToggle] = useState(false);
  const [body, setBody] = useState({
    toPlace: 0,
    fromPlace: 0,
    memo: "",
    createdAt: "",
  });

  const [selectProducts, setSelectProducts] = useState([]);
  const [productId, setProductId] = useState([]);

  const getSelectProduct = (obj) => {
    const findIdx = selectProducts.findIndex(
      (selectProduct) => selectProduct.id === obj.id
    );
    if (findIdx > 0) {
      let copy = [...selectProducts];
      copy[findIdx] = { ...copy[findIdx], value: obj.value };
      setSelectProducts(copy);
    } else {
      setSelectProducts([...selectProducts, obj]);
    }
  };

  const getProductId = (obj) => {
    if (!productId.includes(obj)) {
      setProductId([...productId, obj]);
    }
    // console.log(productId);
  };

  const deleteProductId = (obj) => {
    setProductId(productId.filter((i) => i !== obj));
    // console.log(productId);
  };

  const getBodyResult = (obj) => {
    const key = Object.keys(obj);
    setBody({ ...body, [key]: obj[key] });
    console.log(body);
  };

  const sendRequest = async () => {
    console.log({
      id: body.fromPlace,
      type: type,
      createdAt: body.createdAt,
      memo: body.memo,
      products: selectProducts,
    });
    const res = await axios.post(`${APIURL}/api/teams/${teamId}/pending`, {
      id: body.fromPlace,
      type: type,
      createdAt: body.createdAt,
      memo: body.memo,
      products: selectProducts,
    });

    if (res.status === 200) {
      navigate(`/team/${teamId}/inventory`);
      console.log("이동 성공");
    } else {
      console.log("이동 실패");
    }
  };

  const onSubmit = () => {
    sendRequest();
  };

  return (
    <>
      <UploadInputDiv>
        <UploadInputInnerDiv>
          <UploadLabel>현재 위치</UploadLabel>
          <UploadSelect
            options={places}
            name="fromPlace"
            getResult={getBodyResult}
          />
        </UploadInputInnerDiv>
        <UploadInputInnerDiv>
          <UploadLabel>새 위치</UploadLabel>
          <UploadSelect
            options={places}
            name="toPlace"
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
            <ProductAddListDiv>
              {products &&
                products.map((product) => (
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
          ) : (
            <ProductSelectListDiv>
              {products &&
                products
                  .filter((product) => productId.includes(product.id))
                  .map((filterItem) => {
                    const quantity = filterItem.places.filter(
                      (place) => place.id === Number(body.fromPlace)
                    );
                    const productId = filterItem.id.toString();
                    return (
                      <>
                        <ProductMoveSelectItem
                          key={filterItem.id}
                          id={productId}
                          name={filterItem.name}
                          quantity={quantity[0].quantity}
                          onClick={deleteProductId}
                          getResult={getSelectProduct}
                          toPlace={body.toPlace}
                          fromPlace={body.fromPlace}
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

export default UploadMove;
