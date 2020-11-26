import React from "react";
import styled from "styled-components";
import PageTitle from "../common/PageTitle";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import ContentBody from "../common/ContentBody";
import FullCalendar from "../FullCalendar";

const Calendar = () => {
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>일정관리</PageTitle>
          <FullCalendar />
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default Calendar;
