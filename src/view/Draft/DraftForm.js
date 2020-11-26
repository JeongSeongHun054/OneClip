import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Content from "../common/Content";
import ContentBody from "../common/ContentBody";
import PageTitle from "../common/PageTitle";
import Wrapper from "../common/Wrapper";
import Drafting from "./Drafting";
import BusinessTrip from "./BusinessTrip";
import Vacation from "./Vacation";
import Leave from "./Leave";
import Wysiwyg from "../Wysiwyg";
import DropZone from "../DropZone";

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 100px);
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

  input {
    width: 100%;
    display: block;
    height: calc(2.25rem + 2px);
    padding: 0.45rem 0.9rem;
    font-weight: 400;
    color: #6c757d;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
  }

  input[type="radio"] {
    width: 30px;
    height: 15px;
    display: inline-block;
  }

  label {
    width: 55px;
    font-size: 13px;
  }

  select {
    display: inline-block;
    width: 100%;
    height: calc(2.25rem + 2px);
    font-size: 0.9rem;
    font-weight: 400;
    color: #495057;
    vertical-align: middle;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  button {
    color: #fff;
    background-color: #39afd1;
    border-color: #39afd1;
    text-align: center;
    vertical-align: center;
    width: 120px;
    height: 50px;
    border-radius: 0.15rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    box-shadow: 0 2px 6px 0 rgba(57, 175, 209, 0.5);
    font-size: 16px;
    &:hover {
      background-color: #2b99b9;
      border-color: #2991ae;
    }

    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const DraftForm = () => {
  const [headerValue, setHeaderValue] = useState("drafting");
  const HeaderChange = (e) => {
    setHeaderValue(e.target.value);
  };

  let history = useHistory();

  const GetHeaderForm = () => {
    switch (headerValue) {
      case "drafting":
        return <Drafting />;
      case "business":
        return <BusinessTrip />;
      case "vacation":
        return <Vacation />;
      case "leave":
        return <Leave />;
      default:
        return <Box>뭘 선택한거지?ㄴ</Box>;
    }
  };
  let getRandom = (min, max) => Math.random() * (max - min) + min;
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>기안 작성</PageTitle>
          <Form>
            <Box>
              <span>제목</span>
              <input type="text" />
            </Box>
            <Box>
              <span>헤더양식</span>
              <select
                name=""
                id="header-form"
                onChange={HeaderChange}
                defaultValue="drafting"
              >
                <option value="drafting">기안(품의서)</option>
                <option value="business">출장완료 보고서</option>
                <option value="vacation">결근/휴가/교육 신청서</option>
                <option value="leave">외출/조퇴 신청서</option>
              </select>
            </Box>
            <Box>
              <span>문서구분</span>
              <select name="" id="">
                <option value="dutyDoc">당직일지</option>
                <option value="businessDoc">출장 보고서</option>
                <option value="bookDoc">품의서</option>
                <option value="meetingDoc">회의 보고서</option>
                <option value="vacationDoc">휴가 신청서</option>
              </select>
            </Box>
            <Box>
              <button onClick={(e) => e.preventDefault()}>결재라인 선택</button>
              <input type="text" />
            </Box>
            <Box>
              <button onClick={(e) => e.preventDefault()}>수신처 선택</button>
              <input type="text" disabled />
            </Box>
            <Box>
              <span>보안등급</span>
              <select name="" id="" defaultValue={5}>
                <option value={1}>1등급</option>
                <option value={2}>2등급</option>
                <option value={3}>3등급</option>
                <option value={4}>4등급</option>
                <option value={5}>5등급</option>
              </select>
            </Box>
          </Form>
          {GetHeaderForm()}
          <Wysiwyg />
          <DropZone />
          <ButtonGroup>
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push(`/draft/draftWriting/writing/${getRandom(1, 10)}`);
              }}
            >
              상신
            </button>
            <button onClick={(e) => e.preventDefault()}>임시 저장</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push("/draft/draftWriting");
              }}
            >
              목록
            </button>
          </ButtonGroup>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default DraftForm;
