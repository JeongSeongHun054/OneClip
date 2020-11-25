import React, { useState } from "react";
import styled from "styled-components";
import { DraftCalendar, DraftCalendarHalf } from "./DraftCalendar";

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

const Vacation = () => {
  const [vacationType, setVacationType] = useState(null);

  const halfType = () => {
    if (vacationType === "ahalf" || vacationType === "phalf") {
      return <DraftCalendarHalf />;
    } else {
      return <DraftCalendar />;
    }
  };

  return (
    <Form>
      <Box>
        <span>유/무급 구분</span>
        <div className="radio-group" style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="radio" name="pay" value="paid" id="paid" />
            <label htmlFor="paid">유급</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="radio" name="pay" value="unpaid" id="unpaid" />
            <label htmlFor="unpaid">무급</label>
          </div>
        </div>
      </Box>
      <Box style={{ marginBottom: "50px" }}>
        <span>신청내역</span>
        <div className="radio-group" style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="absent"
              id="absent"
              checked={vacationType === "absent"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="absent">결근</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="vacation"
              id="vacation"
              checked={vacationType === "vacation"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="vacation">연차</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="svacation"
              id="svacation"
              checked={vacationType === "svacation"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="svacation">특휴</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="cac"
              id="cac"
              checked={vacationType === "cac"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="cac">경조사</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="edu"
              id="edu"
              checked={vacationType === "edu"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="edu">교육</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="training"
              id="training"
              checked={vacationType === "training"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="training">훈련</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="ahalf"
              id="ahalf"
              checked={vacationType === "ahalf"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="ahalf">오전반차</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="vacaType"
              value="phalf"
              id="phalf"
              checked={vacationType === "phalf"}
              onChange={(e) => {
                setVacationType(e.target.value);
              }}
            />
            <label htmlFor="phalf">오후반차</label>
          </div>
        </div>
      </Box>
      {halfType()}
      <Box>
        <span>신청사유</span>
        <input type="text" />
      </Box>
    </Form>
  );
};

export default Vacation;
