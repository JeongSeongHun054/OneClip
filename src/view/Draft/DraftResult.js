import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import ContentBody from "../common/ContentBody";
import PageTitle from "../common/PageTitle";
import stamp02 from "../../lib/styles/images/stamp02.gif";

const Form = styled.form`
  display: grid;
  width: 1000px;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  p {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 15px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  span {
    margin-bottom: 1.2rem;
    font-weight: bold;
    font-size: 15px;
  }

  button {
    width: 250px;
    color: #fff;
    box-shadow: 0 2px 6px rgba(114, 124, 245, 0.5);
    background-color: #727cf5;
    border-color: #727cf5;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 0.45rem 0.9rem;
    font-size: 0.9rem;
    border-radius: 0.15rem;
    margin-bottom: 0.5rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;

    &:hover {
      color: #fff;
      background-color: #4e5bf2;
      border-color: #4250f2;
    }
  }

  div {
    display: inline-block;
    width: 300px;
    height: 200px;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

const DraftFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const DraftFlex = styled.ul`
  width: 380px;
  display: flex;
  border: 1px solid #333333;
  &:first-child {
    margin-right: 50px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:not(:last-child) {
      border-right: 1px solid #333333;
    }

    &:not(:first-child) {
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 40px;
      &:first-child {
        width: 90px;
        height: 110px;
      }

      &:not(:last-child) {
        border-bottom: 1px solid #333333;
      }
    }
    h3 {
      font-size: 16px;
    }
  }
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  p,
  span {
    color: #8391a2;
    font-size: 18px;
  }

  p {
    margin-bottom: 20px;
  }
`;

const InputBoard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  textarea {
    display: block;
    height: 150px;
    font-weight: 400;
    color: #6c757d;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    resize: none;
    width: 700px;
    padding: 0.45rem 0.9rem;
    &::placeholder {
      color: #8391a2;
    }
  }

  button {
    background-color: #727cf5;
    border-color: #727cf5;
    color: white;
    font-weight: 300;
    padding: 0.45rem 0.9rem;
    border-top-right-radius: 0.35rem;
    border-bottom-right-radius: 0.35rem;
    width: 100px;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: #4e5bf2;
      border-color: #4250f2;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
  margin: 50px auto;

  .group-two {
    button {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  button {
    background-color: #39afd1;
    border-color: #39afd1;
    text-align: center;
    width: 120px;
    height: 50px;
    border-radius: 0.15rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    box-shadow: 0 2px 6px 0 rgba(57, 175, 209, 0.5);
    font-size: 16px;
    color: white;

    &:hover {
      background-color: #2b99b9;
      border-color: #2991ae;
    }
  }
`;

const DraftResult = () => {
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>휴가 신청서</PageTitle>
          <DraftFlexWrapper>
            <DraftFlex className="payment">
              <li>
                <h3>결재</h3>
              </li>
              <li>
                <p>
                  <img src={stamp02} alt="도장" />
                </p>
                <p>
                  <span>정성훈</span>
                </p>
                <p>
                  <span>인턴</span>
                </p>
                <p>
                  <span>{`${new Date().getFullYear()}-${
                    new Date().getMonth() + 1
                  }-${new Date().getDate()}`}</span>
                </p>
              </li>
              <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
              <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
              <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
            </DraftFlex>
            <DraftFlex className="agreement">
              <li>
                <h3>합의</h3>
              </li>
              <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
              <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
              <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
              <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
            </DraftFlex>
          </DraftFlexWrapper>
          <Form>
            <Box>
              <span>문서제목</span>
              <div></div>
            </Box>
            <Box>
              <span>문서구분</span>
              <div></div>
            </Box>
            <Box>
              <span>부서명</span>
              <div></div>
            </Box>
            <Box>
              <span>유/무급구분</span>
              <div></div>
            </Box>
            <Box>
              <span>직급</span>
              <div></div>
            </Box>
            <Box>
              <span>신청자성명</span>
              <div></div>
            </Box>
            <Box>
              <span>신청기간</span>
              <div></div>
            </Box>
            <Box>
              <span>신청상세내역</span>
              <div></div>
            </Box>
            <Box>
              <span>신청사유</span>
              <div></div>
            </Box>
          </Form>
          <Board>
            <p>상기와 같은 사유로 {""}를 신청하오니 승인을 바랍니다.</p>
            <span>
              <strong style={{ fontSize: "17px" }}>
                {`${new Date().getFullYear()}년 ${
                  new Date().getMonth() + 1
                }월 ${new Date().getDate()}`}
                일
              </strong>
            </span>
          </Board>
          <InputBoard>
            <textarea
              maxLength={255}
              placeholder="내용을 입력하세요"
            ></textarea>
            <button onClick={(e) => e.preventDefault()}>글쓰기</button>
          </InputBoard>
          <Form style={{ gridTemplateRows: "repeat(1, 100px)" }}>
            <Box>
              <span>수신처</span>
              <div></div>
            </Box>
            <Box>
              <span>첨부 파일</span>
              <div></div>
            </Box>
          </Form>
          <ButtonGroup>
            <div className="group-one">
              <button onClick={(e) => e.preventDefault()}>인쇄</button>
            </div>
            <div className="group-two">
              <button onClick={(e) => e.preventDefault()}>참조기안</button>
              <button onClick={(e) => e.preventDefault()}>후열</button>
              <button onClick={(e) => e.preventDefault()}>이전</button>
              <button onClick={(e) => e.preventDefault()}>목록으로</button>
            </div>
          </ButtonGroup>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default DraftResult;
