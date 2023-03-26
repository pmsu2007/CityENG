import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../config/cookie";
import { APIURL } from "../config/key";

const useTeamList = () => {
  const [data, setData] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams`, {
      headers: {
        Authorization: `Bearer ${getCookie('key')}`
      }
    });

    if (res.status === 200)
        setData(res.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return data;
};

export default useTeamList;
