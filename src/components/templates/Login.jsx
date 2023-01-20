import {
  LoginButton,
  LoginDiv,
  LoginInput,
  LoginInputDiv,
  LoginLabel,
  RegisterButton,
} from "../../styledComponents";

import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  }

  const goRegister = () => {
    navigate('/register');
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
          />
        </LoginInputDiv>
        <LoginInputDiv>
          <LoginLabel htmlFor="inputPwd">비밀번호</LoginLabel>
          <LoginInput
            type="password"
            id="inputPwd"
            autoComplete="nope"
          />
        </LoginInputDiv>
        <LoginButton onClick={goHome}>로그인</LoginButton>

        <RegisterButton onClick={goRegister}>회원가입</RegisterButton>
      </LoginDiv>
    </>
  );
};

export default Login;
