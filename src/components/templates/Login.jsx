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
import { APIURL } from "../../config/key";
import axios from "axios";
import { setCookie } from "../../config/cookie";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  
  const navigate = useNavigate();

  const onSubmit = async () => {

    if (!id || !pwd) {
      alert("아이디와 비밀번호를 확인해주세요")
    }
    
    const body = {
      username: id,
      password: pwd
    }

    const res = await axios.post(`${APIURL}/api/signin`, body); 
    
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

  const onKeyUp = (e) => {
    if(e.key === "Enter"){
      onSubmit()
    }
  }
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
            onKeyUp={onKeyUp}
          />
        </LoginInputDiv>
        <LoginButton onClick={onSubmit}>로그인</LoginButton>

        <GoRegisterButton onClick={goRegister}>회원가입</GoRegisterButton>
      </LoginDiv>
    </>
  );
};

export default Login;
