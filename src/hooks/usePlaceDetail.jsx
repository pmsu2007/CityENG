import axios from "axios";
import { useState, useEffect } from "react";
import { APIURL } from "../config/key";

const usePlaceDetail = (placeId) => {
  const [data, setData] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/places/${placeId}`);

    if (res.status === 200) setData(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return data;
};

export default usePlaceDetail;
