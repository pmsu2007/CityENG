import { useParams } from "react-router-dom";
import { pendingType } from "../../data";
import usePendingDetail from "../../hooks/usePendingDetail";
import usePlaceList from "../../hooks/usePlaceList";
import {
  HistoryDiv,
  HistoryDetailDiv,
  HistoryDetailHeaderDiv,
  HistoryDetailTimeDiv,
  HistoryDetailMemoDiv,
  HistoryDetailTag,
} from "../../styledComponents";
import Header from "../organisms/common/Header";
import HistoryDetailItem from "../organisms/history/HistoryDetailItem";

const HistoryDetail = () => {
  const param = useParams();
  const productId = param.product_id;
  const teamId = param.team_id;
  const detail = usePendingDetail(productId);
  const places = usePlaceList(teamId);
  const date = new Date(detail && detail.createdAt);
  
  const convertPlace = (item, target) => {
    let toText = "";
    let fromText = "";

    if (["IN", "OUT", "ADJUST"].includes(item.type)) {
      toText = target.filter(
        (place) => place.id === item.products[0].toPlaceId
      )[0].name;
    } else {
      toText = target.filter(
        (place) => place.id === item.products[0].toPlaceId
      )[0].name;
      fromText =
        "→ \b" +
        target.filter((place) => place.id === item.products[0].fromPlaceId)[0]
          .name;
    }
    return { toText: toText, fromText: fromText };
  };

  return (
    <>
      <Header
        text={`${
          detail &&
          pendingType.filter((item) => item.type === detail.type)[0].name
        } 내역`}
        type={detail && detail.type}
      />
      <HistoryDiv>
        <HistoryDetailDiv>
          <HistoryDetailHeaderDiv>
            <HistoryDetailTag>위치</HistoryDetailTag>
            <div>
              {detail && places && `${convertPlace(detail, places).toText} \b`}
            </div>
            <div>
              {detail && places && `${convertPlace(detail, places).fromText}`}
            </div>
          </HistoryDetailHeaderDiv>
          <HistoryDetailTimeDiv>
            <HistoryDetailTag>날짜</HistoryDetailTag>
            {date &&
              `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
          </HistoryDetailTimeDiv>
          <HistoryDetailMemoDiv>
            <HistoryDetailTag>메모</HistoryDetailTag>
            <div>{detail && detail.memo}</div>
          </HistoryDetailMemoDiv>
          {detail &&
            detail.products.map((product) => {
              return (
                <HistoryDetailItem
                  key={product.id}
                  id={product.productId}
                  fromQuantity={product.fromQuantity}
                  toQuantity={product.quantity}
                  type={detail.type}
                />
              );
            })}
        </HistoryDetailDiv>
      </HistoryDiv>
    </>
  );
};

export default HistoryDetail;
