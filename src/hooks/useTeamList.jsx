import axios from "axios";
import { useState, useEffect } from "react";
import { APIURL } from "../config/key";

const useTeamList = () => {
  const [data, setData] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams`);

    if (res.status === 200)
        setData(res.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return data;
};

export default useTeamList;
