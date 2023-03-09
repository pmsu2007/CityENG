import axios from "axios";
import { useState, useEffect } from "react";
import { APIURL } from "../config/key";

const usePendingList = (teamId) => {
  const [data, setData] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/${teamId}/pendings`);

    if (res.status === 200)
        setData(res.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return data;
};

export default usePendingList;
