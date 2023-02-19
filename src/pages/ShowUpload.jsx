import Header from "../components/organisms/common/Header";
import { UploadPageInnerDiv } from "../styledComponents";
import { Outlet, useLocation } from "react-router-dom";
import { uploadHeader } from "../data";
const ShowUpload = () => {
  const location = useLocation();
  return (
    <>
      {uploadHeader.map((item) => (
        item.url === location.pathname ? (<Header key={item.text} text={item.text} />) : (null)
      ))}
      <UploadPageInnerDiv>
        <Outlet />
      </UploadPageInnerDiv>
    </>
  );
};

export default ShowUpload;
