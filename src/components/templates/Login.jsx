import {
  LoginButton,
  LoginDiv,
  LoginInput,
  LoginInputDiv,
  LoginLabel,
  GoRegisterButton,
} from "../../styledComponents";

import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import axios from "axios";
import { APIURL } from "../../config/key";
import { setCookie } from "../../config/cookie";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  
  const navigate = useNavigate();
  const onSubmit = async () => {
    const body = {
      username: id,
      password: pwd
    }

    const res = await axios.post(`${APIURL}/api/signin`, body);
    console.log(res)
    if (res.status === 200) {
      setCookie("key", res.data.apikey)
      navigate('/teams');
    } else {
      console.log("위치 등록 실패");
    }
  }

  const goRegister = () => {
    navigate('/register');
  }

  const onChangeId = useCallback((e) => {
    const currId = e.target.value;
    setId(currId);
  }, [setId]);

  //비밀번호
  const onChangePwd = useCallback((e) => {
    const currPwd = e.target.value;
    setPwd(currPwd);
  }, [setPwd]);
  return (
    <>
      <LoginDiv>
        <LoginInputDiv>
          <LoginLabel htmlFor="inputId">아이디</LoginLabel>
          <LoginInput
            type="text"
            id="inputId"
            autoComplete="nope"
            value={id}
            onChange={onChangeId}
          />
        </LoginInputDiv>
        <LoginInputDiv>
          <LoginLabel htmlFor="inputPwd">비밀번호</LoginLabel>
          <LoginInput
            type="password"
            id="inputPwd"
            autoComplete="nope"
            value={pwd}
            onChange={onChangePwd}
          />
        </LoginInputDiv>
        <LoginButton onClick={onSubmit}>로그인</LoginButton>

        <GoRegisterButton onClick={goRegister}>회원가입</GoRegisterButton>
      </LoginDiv>
    </>
  );
};

export default Login;
