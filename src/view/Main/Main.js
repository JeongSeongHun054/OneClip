import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../common/PageTitle";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import ContentBody from "../common/ContentBody";
import MainCalendar from "../MainCalendar";

const CardArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  row-gap: 35px;
`;

const CardBox = styled.div`
  width: 660px;
  height: 400px;
  background-color: #fff;
  border-radius: 0.25rem;
  border: none;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 15px;

  h3 {
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 0 10px;
  }

  ul {
    li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0 0 10px;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      span:first-child {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`;

const Main = () => {
  const [getMail, setGetMail] = useState(["메일이당"]);
  const [getDraft, setGetDraft] = useState(["기안이당"]);
  const [getNotice, setGetNotice] = useState(["공지사항이당"]);
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>홈</PageTitle>
          <CardArea>
            <CardBox>
              <h3>받은 메일</h3>
              <ul>
                {getMail.length !== 0 ? (
                  <li>
                    <Link to="/mail/getMail">
                      <span>{getMail}</span>
                    </Link>
                    <span>{`${new Date().getFullYear()}-${
                      new Date().getMonth() + 1
                    }-${new Date().getDate()}`}</span>
                  </li>
                ) : (
                  <li>받은 메일이 없습니다</li>
                )}
              </ul>
            </CardBox>
            <CardBox>
              <h3>기안함</h3>
              <ul>
                {getDraft.length !== 0 ? (
                  <li>
                    <Link to="/draft/draftWriting">
                      <span>{getDraft}</span>
                    </Link>
                    <span>{`${new Date().getFullYear()}-${
                      new Date().getMonth() + 1
                    }-${new Date().getDate()}`}</span>
                  </li>
                ) : (
                  <li>기안함이 비어있습니다.</li>
                )}
              </ul>
            </CardBox>
            <CardBox>
              <h3>공지사항</h3>
              <ul>
                {getNotice.length !== 0 ? (
                  <li>
                    <Link to="/draft/draftWriting">
                      <span>{getNotice}</span>
                    </Link>
                    <span>{`${new Date().getFullYear()}-${
                      new Date().getMonth() + 1
                    }-${new Date().getDate()}`}</span>
                  </li>
                ) : (
                  <li>공지사항이 비어있습니다.</li>
                )}
              </ul>
            </CardBox>
            <CardBox style={{ width: "400px" }}>
              <MainCalendar />
            </CardBox>
          </CardArea>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default Main;
