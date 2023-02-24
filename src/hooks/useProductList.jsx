import axios from "axios";
import { useState, useEffect } from "react";
import { APIURL } from "../config/key";

const useProductList = () => {
  const [data, setData] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/1/products/page`);

    if (res.status === 200) setData(res.data.content);
    console.log(res.data.content);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return data;
};

export default useProductList;