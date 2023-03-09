import Header from "../organisms/common/Header";
import { HistoryDiv, HistoryListDiv } from "../../styledComponents";
import usePendingList from "../../hooks/usePendingList";
import { useParams } from "react-router-dom";
import HistoryItem from "../organisms/history/HistoryItem";

const History = () => {
  const param = useParams();
  const teamId = param.team_id;
  const pendings = usePendingList(teamId);
  console.log(pendings);
  return (
    <>
      <Header text={"히스토리"} />
      <HistoryDiv>
        <HistoryListDiv>
          {pendings &&
            pendings.map((pending) => (
              <HistoryItem
                key={pending.id}
                id={pending.id}
                type={pending.type}
                memo={pending.memo}
                createdAt={pending.createdAt}
                products={pending.products}
              />
            ))}
        </HistoryListDiv>
      </HistoryDiv>
    </>
  );
};

export default History;
