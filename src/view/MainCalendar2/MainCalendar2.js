import React, { useState } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";

import getDay from "date-fns/getDay";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import getDate from "date-fns/getDate";
import getDaysInMonth from "date-fns/getDaysInMonth"; // 해당 달이 몇일이나 있는지 계산 => ex) getDaysInMonth(new Date(2020,10)) = 30

import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

const Wrapper = styled.div`
  .saturday {
    color: blue;
  }
  .sunday {
    color: red;
  }

  .test {
    opacity: 0.5;
  }

  .span_container {
    margin-left: 15px;
    span {
      display: inline-block;
      border: none;
      border-radius: 5px;
      font-size: 12px;
      height: 20px;
      color: white;
      text-align: center;
      line-height: 20px;
      cursor: pointer;
    }

    .span_top {
      margin-bottom: 10px;
      span {
        width: 35px;

        &:hover {
          background-color: darkgray;
        }

        &:not(:last-child) {
          margin-right: 10px;
        }

        &:nth-child(1) {
          background-color: #964b00;
        }

        &:nth-child(2) {
          background-color: #1d93ec;
        }

        &:nth-child(3) {
          background-color: #7fc62c;
        }
      }
    }

    .span_bottom {
      span {
        &:first-child {
          width: 110px;
          margin-right: 10px;
          background-color: cadetblue;
        }

        &:nth-child(2) {
          width: 35px;
          font-size: 17px;
        }
      }
    }
  }
`;

const MainCalendar2 = () => {
  const [startDate, setStartDate] = useState(new Date());

  // 요일 반환
  const getDayName = (date) => {
    return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
  };

  // 날짜 비교시 년 월 일까지만 비교하게끔

  const createDate = (date) => {
    return new Date(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
  };

  const isDaysInMonth = (date) => {
    return new Date(new Date(date.getFullYear(), date.getMonth()));
  };

  return (
    <Wrapper>
      <DatePicker
        locale="ko"
        selected={startDate}
        onChange={setStartDate}
        inline
        //onSelect => 날짜가 클릭되었을 때
        // onChange => 날짜값이 바뀔 때때
        dayClassName={(date) =>
          getDayName(createDate(date)) === "토"
            ? "saturday"
            : getDayName(createDate(date)) === "일"
            ? "sunday"
            : undefined
        }
      />
    </Wrapper>
  );
};

export default MainCalendar2;
