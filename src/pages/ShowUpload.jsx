import Header from "../components/organisms/common/Header";
import { UploadPageInnerDiv } from "../styledComponents";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { uploadHeader } from "../data";
const ShowUpload = () => {
  const location = useLocation();
  const param = useParams();
  const teamId = param.team_id;

  return (
    <>
      {uploadHeader.map((item) => (
        item.keyword === location.pathname.split('/').pop() ? (<Header key={item.text} text={item.text} />) : (null)
      ))}
      <UploadPageInnerDiv>
        <Outlet context={{teamId}} />
      </UploadPageInnerDiv>
    </>
  );
};

export default ShowUpload;
