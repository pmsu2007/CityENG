import axios from "axios";
import { useState, useEffect } from "react";
import { APIURL } from "../config/key";
import { getCookie } from "../config/cookie";

const usePendingDetail = (productId) => {
  const [data, setData] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/pendings/${productId}`, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });

    if (res.status === 200) setData(res.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return data;
};

export default usePendingDetail;
