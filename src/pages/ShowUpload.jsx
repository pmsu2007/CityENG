import Header from "../components/organisms/common/Header";
import { UploadPageInnerDiv } from "../styledComponents";
import { Outlet, useLocation } from "react-router-dom";
import { uploadHeader } from "../data";
const ShowUpload = () => {
  const location = useLocation();

  return (
    <>
      {uploadHeader.map((item) =>
        item.keyword === location.pathname.split("/").pop() ? (
          <Header key={item.text} text={item.text} type={item.keyword} />
        ) : null
      )}
      <UploadPageInnerDiv>
        <Outlet />
      </UploadPageInnerDiv>
    </>
  );
};

export default ShowUpload;
