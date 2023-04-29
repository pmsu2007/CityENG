import Header from "../organisms/common/Header";
import {
  HeaderButton,
  ProductDiv,
  ProductItemInnerDiv,
  ProductItemTitle,
  ProductListDiv,
  ProductTitleDiv,
} from "../../styledComponents";
import axios from "axios";
import { getCookie } from "../../config/cookie";
import { APIURL } from "../../config/key";
import useProductDetail from "../../hooks/useProductDetail";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const param = useParams();
  const productId = param.product_id;
  const teamId = param.team_id;
  const detail = useProductDetail(productId);
  const navigate = useNavigate();

  const quantity = detail && detail.places
    .map((place) => place.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const sendDeleteRequest = async () => {
    const res = await axios.delete(
      `${APIURL}/api/teams/${teamId}/products/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 204) {
      navigate(`/team/${teamId}/inventory`);
    } else {
      console.log("제품 삭제 실패");
    }
  };

  const onDeleteClick = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      sendDeleteRequest();
    } 
  };

  const onUpdateClick = () => {
    navigate(`/upload/${teamId}/inventory/${productId}/update`)
  }
  return (
    <>
      <Header text={"제품"} />
      <HeaderButton onClick={onDeleteClick}>삭제</HeaderButton>
      <HeaderButton onClick={onUpdateClick} style={{
        'right': 70
      }}>수정</HeaderButton>
      <ProductDiv>
        {/* 제품 정보 */}
        <ProductListDiv>
          <ProductTitleDiv>제품 정보</ProductTitleDiv>
          <ProductItemInnerDiv>
            <ProductItemTitle>제품명</ProductItemTitle>
            <div style={{fontSize: "16px"}}>{detail && detail.name}</div>
          </ProductItemInnerDiv>
          <ProductItemInnerDiv>
            <ProductItemTitle>현재 재고</ProductItemTitle>
            <div style={{fontSize: "20px"}}>{quantity}</div>
          </ProductItemInnerDiv>
        </ProductListDiv>
        {/* 제품 속성 */}
        <ProductListDiv>
          <ProductTitleDiv>제품 속성</ProductTitleDiv>
          {detail && detail.attributes.map((attribute) => (
            <ProductItemInnerDiv key={attribute.id}>
              <ProductItemTitle>{attribute.name}</ProductItemTitle>
              <div style={{fontSize: "20px"}}>{attribute.value}</div>
            </ProductItemInnerDiv>
          ))}
        </ProductListDiv>
        {/* 제품 위치 */}
        <ProductListDiv>
          <ProductTitleDiv>위치별 재고</ProductTitleDiv>
          {detail && detail.places.map((place) => (
            <ProductItemInnerDiv key={place.id}>
              <ProductItemTitle>{place.name}</ProductItemTitle>
              <div style={{fontSize: "20px"}}>{place.quantity}</div>
            </ProductItemInnerDiv>
          ))}
        </ProductListDiv>
      </ProductDiv>
    </>
  );
};

export default ProductDetail;
