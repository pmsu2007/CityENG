import Header from "../organisms/common/Header";
import {
  HeaderButton,
  ProductDiv,
  ProductItemInnerDiv,
  ProductItemTitle,
  ProductListDiv,
  ProductTitleDiv,
} from "../../styledComponents";
import { useState } from "react";
import useProductDetail from "../../hooks/useProductDetail";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const param = useParams();
  const productId = param.product_id;
  const detail = useProductDetail(productId);
  // console.log(detail);

  const quantity = detail && detail.places
    .map((place) => place.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const [isDelete, setIsDelete] = useState(false);
  const onDeleteClick = () => {
    if (!isDelete) {
      setIsDelete(true);
    } else {
      setIsDelete(false);
    }
  };
  return (
    <>
      <Header text={"제품"} />
      <HeaderButton onClick={onDeleteClick}>삭제</HeaderButton>
      <ProductDiv>
        {/* 제품 정보 */}
        <ProductListDiv>
          <ProductTitleDiv>제품 정보</ProductTitleDiv>
          <ProductItemInnerDiv>
            <ProductItemTitle>제품명</ProductItemTitle>
            <div>{detail && detail.name}</div>
          </ProductItemInnerDiv>
          <ProductItemInnerDiv>
            <ProductItemTitle>바코드</ProductItemTitle>
            <div>{detail && detail.barcode}</div>
          </ProductItemInnerDiv>
          <ProductItemInnerDiv>
            <ProductItemTitle>현재 재고</ProductItemTitle>
            <div>{quantity}</div>
          </ProductItemInnerDiv>
        </ProductListDiv>
        {/* 제품 속성 */}
        <ProductListDiv>
          <ProductTitleDiv>제품 속성</ProductTitleDiv>
          {detail && detail.attributes.map((attribute) => (
            <ProductItemInnerDiv key={attribute.id}>
              <ProductItemTitle>{attribute.name}</ProductItemTitle>
              <div>{attribute.value}</div>
            </ProductItemInnerDiv>
          ))}
        </ProductListDiv>
        {/* 제품 위치 */}
        <ProductListDiv>
          <ProductTitleDiv>위치별 재고</ProductTitleDiv>
          {detail && detail.places.map((place) => (
            <ProductItemInnerDiv key={place.id}>
              <ProductItemTitle>{place.name}</ProductItemTitle>
              <div>{place.quantity}</div>
            </ProductItemInnerDiv>
          ))}
        </ProductListDiv>
      </ProductDiv>
    </>
  );
};

export default ProductDetail;
