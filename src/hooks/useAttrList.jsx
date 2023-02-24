import axios from "axios";
import { useState, useEffect } from "react";
import { APIURL } from "../config/key";

const useAttrList = (id) => {
  const [data, setData] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/${id}/attrs`);
    if (res.status === 200) setData(res.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return data;
};

export default useAttrList;