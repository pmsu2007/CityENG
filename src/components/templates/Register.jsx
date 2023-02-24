import { useState, useCallback } from "react";
import {
  RegisterDiv,
  RegisterInputDiv,
  RegisterLabel,
  RegisterInput,
  RegisterTitleDiv,
  RegisterButton,
} from "../../styledComponents";

const Register = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [nickname, setNickname] = useState("");

  const validatePwd = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  };

  const validateNickname = (nickname) => {
    return nickname.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/);
  };

  const onChangeId = useCallback((e) => {
    const currId = e.target.value;
    setId(currId);
  }, [setId]);

  //비밀번호
  const onChangePwd = useCallback((e) => {
    const currPwd = e.target.value;
    setPwd(currPwd);
  }, [setPwd]);

  //비밀번호 확인
  const onChangeConfirmPwd = useCallback((e) => {
    const currConfirmPwd = e.target.value;
    setConfirmPwd(currConfirmPwd);
  }, [setConfirmPwd]);

  //닉네임
  const onChangeNickname = useCallback((e) => {
    const currNickname = e.target.value;
    setNickname(currNickname);
  }, [setNickname]);

  const isPwdValid = validatePwd(pwd);
  const isConfirmPwd = pwd === confirmPwd;
  const isNicknameValid = validateNickname(nickname);
  const isAllValid = id && isPwdValid && isConfirmPwd && isNicknameValid;

  // 회원가입 요청 API
  const registerRequest = async () => {
    // const body = {
    //   id: id,
    //   pwd: pwd,
    //   nickname: nickname,
    // };

    //const res = await axios.post(`${APIURL}/register/${body.filter}`, body);

    // if (res.data.success) {
    //   alert("회원가입 성공! 환영합니다.");
    //   goLogin();
    // } else {
    //   alert("이미 존재하는 이메일입니다.");
    // }
  };
  

  const onSubmit = () => {
    if (!isAllValid) {
      alert('제대로 입력해주세요')
    } else {
      registerRequest();
    }
  };

  return (
    <>
      <RegisterTitleDiv>회원가입</RegisterTitleDiv>
      <RegisterDiv>
        <RegisterInputDiv>
          <RegisterLabel htmlFor="inputNickname">이름</RegisterLabel>
          <RegisterInput
            type="text"
            id="inputNickname"
            autoComplete="nope"
            value={nickname}
            onChange={onChangeNickname}
          />
        </RegisterInputDiv>
        <RegisterInputDiv>
          <RegisterLabel htmlFor="inputId">아이디</RegisterLabel>
          <RegisterInput
            type="text"
            id="inputId"
            autoComplete="nope"
            value={id}
            onChange={onChangeId}
          />
        </RegisterInputDiv>
        <RegisterInputDiv>
          <RegisterLabel htmlFor="inputPwd">비밀번호</RegisterLabel>
          <RegisterInput
            type="password"
            id="inputPwd"
            autoComplete="nope"
            value={pwd}
            onChange={onChangePwd}
          />
        </RegisterInputDiv>
        <RegisterInputDiv>
          <RegisterLabel htmlFor="inputConfirmPwd">비밀번호 확인</RegisterLabel>
          <RegisterInput
            type="password"
            id="inputConfirmPwd"
            autoComplete="nope"
            value={confirmPwd}
            onChange={onChangeConfirmPwd}
          />
        </RegisterInputDiv>
        <RegisterButton onClick={onSubmit}>등록</RegisterButton>
      </RegisterDiv>
    </>
  );
};

export default Register;
