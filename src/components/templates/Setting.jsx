import { SettingDiv, SettingListDiv } from "../../styledComponents";
import Header from "../organisms/common/Header";
import SettingNav from "../organisms/common/SettingNav";

const Setting = () => {
  return (
    <>
      <Header text={"설정"} />
      <SettingDiv>
        <SettingNav />
      </SettingDiv>
    </>
  );
};

export default Setting;
