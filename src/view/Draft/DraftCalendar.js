import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

const Wrapper = styled.div`
  padding: 10px 0 0 10px;
  input {
    font-size: 13px;
    border-radius: 4px;
    box-shadow: inset 0 2px 2px #e9e9e9;
    border: 1px solid #aeaeae;
    padding: 6px 10px 5px;
  }

  input[name="day"] {
    width: 50px;
    margin-bottom: 30px;
    margin-right: 15px;
    height: calc(2.25rem + 2px);
    padding: 0.45rem 0.9rem;
    font-weight: 400;
    color: #6c757d;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    text-align: center;
  }

  .calendar-group {
    display: flex;
    align-items: center;
    span {
      margin-right: 25px;
    }
    .start {
      margin-right: 40px;
    }
  }
`;

export const DraftCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [diff, setDiff] = useState(0);

  const dayCal = (start, end) => {
    let between = (end - start) / 1000 / 60 / 60 / 24 + 1;
    setDiff(between);
  };

  useEffect(() => {
    if (document.querySelector(".end").value !== "") {
      dayCal(startDate, endDate);
    }
  });
  return (
    <Wrapper>
      <p>시작/종료일</p>
      <input type="text" name="day" value={diff} onChange={dayCal} />
      <label htmlFor="day">일</label>
      <div className="calendar-group">
        <span>시작일</span>
        <DatePicker
          locale="ko"
          onSelect={(date) => {
            setStartDate(date);
          }}
          selected={startDate}
          startDate={startDate}
          className="start"
          dateFormat="yyy/MM/dd"
          showDisabledMonthNavigation
          minDate={new Date()}
        />
        <span>종료일</span>
        <DatePicker
          locale="ko"
          onSelect={(date) => {
            setEndDate(date);
          }}
          selected={endDate}
          startDate={endDate}
          className="end"
          dateFormat="yyy/MM/dd"
          showDisabledMonthNavigation
          minDate={new Date()}
        />
      </div>
    </Wrapper>
  );
};

export const DraftCalendarHalf = () => {
  const [startDay, setStartDay] = useState(null);

  useEffect(() => {});

  return (
    <Wrapper>
      <p>시작/종료일</p>
      <input type="text" name="day" defaultValue={0.5} />
      <label htmlFor="day">일</label>
      <div className="calendar-group">
        <span>시작일</span>
        <DatePicker
          locale="ko"
          onSelect={(date) => {
            console.log(date);
            setStartDay(date);
          }}
          selected={startDay}
          startDate={startDay}
          className="start"
          dateFormat="yyy/MM/dd"
          showDisabledMonthNavigation
          minDate={new Date()}
        />
      </div>
    </Wrapper>
  );
};
