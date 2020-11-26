import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import ContentBody from "../common/ContentBody";
import PageTitle from "../common/PageTitle";
import InputBadge from "./InputBadge";
import DropZone from "../DropZone";
import Wysiwyg from "../Wysiwyg";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 20px;
  margin: 0 auto 80px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    margin-bottom: 1.2rem;
    font-weight: bold;
    font-size: 15px;
  }

  .title {
    width: 100%;
    height: 45px;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
    border: 1px solid #d4d5d6;
    color: #565656;

    &:focus {
      border-color: cornflowerblue;
    }
  }
`;

const ButtonGroup = styled.div`
  margin-bottom: 30px;
  button {
    padding: 0.9rem 1.8rem;
    color: #fff;
    background-color: #fa5c7c;
    border-color: #fa5c7c;
    box-shadow: 0 2px 6px 0 rgba(250, 92, 124, 0.5);
    font-size: 1.2rem;
    border-radius: 0.15rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;

    &:hover {
      color: #fff;
      background-color: #f9375e;
      border-color: #f82b54;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

const MailResult = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 20px;
    font-size: 22px;
  }

  button {
    padding: 0.45rem 0.8rem;
    border-radius: 40%;
    background-color: #39afd1;
    border-color: #38afd1;
    color: #fff;

    &:hover {
      background-color: #2b99b9;
      border-color: #2991ae;
      color: #fff;
    }

    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
  }
`;

const MailWriting = () => {
  const [isSend, setIsSend] = useState(false);

  const history = useHistory();

  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>메일 쓰기</PageTitle>
          {isSend ? (
            <MailResult>
              <CheckCircleOutlineIcon
                color="primary"
                style={{ fontSize: "5rem" }}
              />
              <span>정상적으로 메일이 전송되었습니다.</span>
              <button onClick={() => setIsSend(false)}>확인</button>
            </MailResult>
          ) : (
            <>
              <ButtonGroup>
                <button onClick={() => setIsSend(true)}>보내기</button>
                <button onClick={() => history.push("/mail/tempMail")}>
                  임시 저장
                </button>
              </ButtonGroup>
              <Form>
                <Box>
                  <span>받는 사람</span>
                  <InputBadge />
                </Box>
                <Box>
                  <span>참조</span>
                  <InputBadge />
                </Box>
                <Box>
                  <span>제목</span>
                  <input type="text" className="title" />
                </Box>
                <Box>
                  <span>파일첨부</span>
                  <DropZone />
                </Box>
              </Form>
              <Wysiwyg />
            </>
          )}
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default MailWriting;
