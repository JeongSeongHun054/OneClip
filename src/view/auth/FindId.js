import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../lib/styles/images/logo_login_osd.gif";

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

              span {
                width: 45px;
                display: flex;
                position: relative;
                top: 25px;
                z-index: 10;
                font-size: 14px;
              }

              .focus::placeholder {
                color: black;
              }

              input {
                width: 100%;
                border-bottom: 1px solid #999;
                padding: 10px 60px;
                margin-bottom: 30px;
              }
            }

            .button-container {
              button {
                width: 115px;
                height: 50px;
                border-radius: 5px;
                margin: 30px 0;
                background-color: #6dabe4;
                color: #fff;
                line-height: 50px;

                &:hover {
                  background-color: #3498db;
                }

                &:first-child {
                  margin-right: 20px;
                }
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

const FindForm = styled.form``;

const Result = (props) => {
  useEffect(() => {
    return () => {
      props.onReset();
    };
  }, [props]);

  return (
    <>
      <p style={{ fontSize: "14px", color: "#424242", marginBottom: "85px" }}>
        <strong>{props.text}</strong>의 정보와 일치하는 아이디 입니다.
      </p>
      <p style={{ fontSize: "12px", color: "#2681dc", fontWeight: 700 }}>
        일치하는 아이디가 없습니다.
      </p>
    </>
  );
};

const FindId = ({ history }) => {
  const [isResult, setIsResult] = useState(false);
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setIsResult(!isResult);
  };
  const onFocus = (e) => {
    let element = e.target;
    element.style.borderBottom = "1px solid black";
    element.classList.add("focus");
  };
  const onBlur = (e) => {
    let element = e.target;
    element.style.borderBottom = "1px solid #999";
    element.classList.remove("focus");
  };

  return (
    <Container>
      <div className="wrapper">
        <section className="first">
          <h1>
            <img src={Logo} alt="Logo" />
          </h1>
        </section>
        <section>
          <div className="form-wrapper">
            <h2>아이디 찾기</h2>
            <div className="form-container">
              <FindForm onSubmit={onSubmit}>
                {isResult ? (
                  <Result text={input} onReset={() => setInput("")} />
                ) : (
                  <>
                    <p>
                      <span>✔ 이름</span>
                      <input
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={input}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </p>
                    <p style={{ fontSize: "13px", color: "#555" }}>
                      • 회원 정보에 등록한 이름을 입력하시면 아이디를 확인할 수
                      있습니다.
                    </p>
                  </>
                )}
                <div className="button-container">
                  <button type="submit">확인</button>
                  <button type="button" onClick={() => history.push("/")}>
                    취소
                  </button>
                </div>
              </FindForm>
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

export default withRouter(FindId);
