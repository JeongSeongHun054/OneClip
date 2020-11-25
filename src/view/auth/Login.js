import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import Checkbox from "../common/Checkbox";
import Logo from "../../lib/styles/images/logo_login_osd.gif";
import Search from "../../lib/styles/images/bt_ic_search.gif";

import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

import LoginInput from "./LoginInput";

const Container = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 900px;
    height: 600px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    margin-bottom: 40px;

    section {
      width: 100%;
      height: 100%;

      &:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          width: 300px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          border-radius: 20px;
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
        }
      }

      &:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;

        .form-wrapper {
          width: 300px;
          height: 450px;
          display: flex;
          flex-direction: column;
          padding-top: 20px;

          h2 {
            font-size: 36px;
            color: #222;
            font-weight: 700;
            margin-bottom: 40px;
            font-family: "Poppins", sans-serif;
          }

          .form-container {
            form {
              display: flex;
              flex-direction: column;

              //span {
              //  width: 20px;
              //  display: flex;
              //  position: relative;
              //  top: 25px;
              //  z-index: 10;
              //}

              //.focus::placeholder {
              //  color: black;
              //}

              //input[type="text"],
              //input[type="password"] {
              //  border-bottom: 1px solid #999;
              //  padding: 10px 35px;
              //  margin-bottom: 30px;
              //}
            }

            label,
            a {
              font-size: 14px;
              color: #222;
            }

            button {
              width: 115px;
              height: 50px;
              border-radius: 5px;
              margin: 30px 0;
              background-color: #6dabe4;
              color: #fff;

              &:hover {
                background-color: #3498db;
              }
            }
          }
        }
      }
    }
  }
  footer {
    color: #666;
    font-size: 12px;
  }
`;

const LoginForm = styled.form``;

const Login = ({ history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/main");
  };

  return (
    <Container>
      <div className="wrapper">
        <section className="first">
          <h1>
            <img src={Logo} alt="Logo" />
          </h1>
        </section>
        <section className="second">
          <div className="form-wrapper">
            <h2>로그인</h2>
            <div className="form-container">
              <LoginForm onSubmit={onSubmit}>
                <LoginInput
                  Icon={PersonIcon}
                  type="text"
                  placeholder="아이디를 입력하세요"
                  onChange={onChangeId}
                />
                <LoginInput
                  Icon={LockIcon}
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={onChangePw}
                />
                <div style={{ display: "flex" }}>
                  <Checkbox boxname="로그인 유지" />
                  <Link to="/find" style={{ marginLeft: "20px" }}>
                    <img src={Search} alt="Search Icon" />
                    &nbsp; 아이디 찾기
                  </Link>
                </div>
                <button>로그인</button>
              </LoginForm>
            </div>
          </div>
        </section>
      </div>
      <footer>
        &copy; <span style={{ fontWeight: "bold" }}>Onesoftdigm</span> Corp. All
        Rights Reserved.
      </footer>
    </Container>
  );
};

export default withRouter(Login);
