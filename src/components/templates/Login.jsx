import {
  LoginButton,
  LoginDiv,
  LoginInput,
  LoginInputDiv,
  LoginLabel,
  GoRegisterButton,
} from "../../styledComponents";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/teams');
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

        <GoRegisterButton onClick={goRegister}>회원가입</GoRegisterButton>
      </LoginDiv>
    </>
  );
};

export default Login;
