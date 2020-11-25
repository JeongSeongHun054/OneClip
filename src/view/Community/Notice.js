import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import PageTitle from "../common/PageTitle";
import ContentBody from "../common/ContentBody";

const Notice = () => {
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>공지사항</PageTitle>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default Notice;
