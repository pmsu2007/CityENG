import { useState, useCallback } from "react";
import {
  RegisterDiv,
  RegisterInputDiv,
  RegisterLabel,
  RegisterInput,
  RegisterTitleDiv,
  RegisterButton,
  RegisterInnerInputDiv,
} from "../../styledComponents";
import { APIURL } from "../../config/key";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import { useEffect } from "react";

const Register = () => {
  const [id, setId] = useState("");
  const [existId, setExistId] = useState(false);
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const validateName = (name) => {
    return name.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/);
  };

  const onChangeId = useCallback(
    (e) => {
      const currId = e.target.value;
      setId(currId);
    },
    [setId]
  );

  //비밀번호
  const onChangePwd = useCallback(
    (e) => {
      const currPwd = e.target.value;
      setPwd(currPwd);
    },
    [setPwd]
  );

  //비밀번호 확인
  const onChangeConfirmPwd = useCallback(
    (e) => {
      const currConfirmPwd = e.target.value;
      setConfirmPwd(currConfirmPwd);
    },
    [setConfirmPwd]
  );

  //닉네임
  const onChangeName = useCallback(
    (e) => {
      const currName = e.target.value;
      setName(currName);
    },
    [setName]
  );

  //  const isPwdValid = validatePwd(pwd);
  const isConfirmPwd = pwd === confirmPwd;
  const isNameValid = validateName(name);
  const isAllValid = id && pwd && isConfirmPwd && isNameValid;

  // 회원가입 요청 API
  const registerRequest = async () => {
    const body = {
      id: id,
      password: pwd,
      authentication: "SIGNIN",
      name: name,
      email: `${id}@gmail.com`, // Email 중복 X
    };

    const res = await axios.post(`${APIURL}/api/user`, body, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });

    if (res.status === 201) {
      alert("회원가입 성공! 환영합니다.");
      navigate(`/`);
    } else {
      alert("이미 존재하는 회원입니다.");
    }
  };

  const onSubmit = () => {
    if (!isAllValid) {
      alert("정보를 제대로 입력해주세요");
    } else {
      registerRequest();
    }
  };

  const idExistRequest = async () => {
    const res = await axios.get(`${APIURL}/api/user/exist-id/${id}`, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });
    console.log(res);
    if (res.status === 200) {
      setExistId(res.data.result);
    } else {
      alert("");
    }
  };

  useEffect(() => {
    idExistRequest();
  }, [id]);

  return (
    <>
      <RegisterTitleDiv>회원가입</RegisterTitleDiv>
      <RegisterDiv>
        <RegisterInnerInputDiv>
          <RegisterInputDiv>
            <RegisterLabel htmlFor="inputNickname">이름</RegisterLabel>
            <RegisterInput
              type="text"
              id="inputNickname"
              autoComplete="nope"
              value={name}
              onChange={onChangeName}
            />
          </RegisterInputDiv>
        </RegisterInnerInputDiv>
        <RegisterInnerInputDiv>
          <RegisterInputDiv
            style={{
              width: "100%",
            }}
          >
            <RegisterLabel htmlFor="inputId">아이디</RegisterLabel>
            <RegisterInput
              type="text"
              id="inputId"
              autoComplete="nope"
              value={id}
              onChange={onChangeId}
            />
          </RegisterInputDiv>
          <div style={{
            color:"red",
            fontSize: "12px",
            textAlign: "end",
            
          }}>
            {existId
              ? "* 사용중인 아이디 입니다."
              : "* 사용 가능한 아이디 입니다."}
          </div>
        </RegisterInnerInputDiv>

        <RegisterInnerInputDiv>
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
        </RegisterInnerInputDiv>
        <RegisterInnerInputDiv>
          <RegisterInputDiv>
            <RegisterLabel htmlFor="inputConfirmPwd">
              비밀번호 확인
            </RegisterLabel>
            <RegisterInput
              type="password"
              id="inputConfirmPwd"
              autoComplete="nope"
              value={confirmPwd}
              onChange={onChangeConfirmPwd}
            />
          </RegisterInputDiv>
        </RegisterInnerInputDiv>
        <RegisterButton onClick={onSubmit}>등록</RegisterButton>
      </RegisterDiv>
    </>
  );
};

export default Register;
