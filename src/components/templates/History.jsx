import Header from "../organisms/common/Header";
import {
  HistoryDiv,
  HistoryInputInnerDiv,
  HistoryListDiv,
  HistorySearchBtn,
} from "../../styledComponents";
import { useParams } from "react-router-dom";
import HistoryItem from "../organisms/history/HistoryItem";
import HistorySelect from "../atomics/select/HistorySelect";
import HistoryInput from "../atomics/input/HistoryInput";
import { pendingType } from "../../data";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { APIURL } from "../../config/key";
import { getCookie } from "../../config/cookie";

const History = () => {
  const param = useParams();
  const teamId = param.team_id;
  const [pendings, setPendings] = useState([]);
  const [body, setBody] = useState({
    types: "",
    startDateTime: 0,
    endDateTime: 0,
  });
  
  const getBodyResult = (obj) => {
    const key = Object.keys(obj);
    setBody({ ...body, [key]: obj[key] });
    console.log(body);
  };

  const sendRequest = async () => {
    let query = "?";

    if (body.types) {
      query += `types=${body.types}&`;
    }

    if (body.startDateTime && body.endDateTime) {
      query += `startDateTime=${body.startDateTime}&endDateTime=${body.endDateTime}`;
    }
    const res = await axios.get(
      `${APIURL}/api/teams/${teamId}/pendings${query}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );
    
    if (res.status === 200) {
      setPendings(res.data);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <Header text={"히스토리"} />
      <HistoryDiv>
        <HistoryListDiv>
          <HistorySelect
            options={pendingType}
            name="types"
            getResult={getBodyResult}
          />
          <HistoryInputInnerDiv>
            <HistoryInput name="startDateTime" getResult={getBodyResult} />
            <div>-</div>
            <HistoryInput name="endDateTime" getResult={getBodyResult} />
          </HistoryInputInnerDiv>
          <HistorySearchBtn
            onClick={() => {
              sendRequest();
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </HistorySearchBtn>
          {pendings &&
            pendings.reverse().map((pending) => (
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
