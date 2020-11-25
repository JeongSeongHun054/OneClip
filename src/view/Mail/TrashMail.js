import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import PageTitle from "../common/PageTitle";
import ContentBody from "../common/ContentBody";

const TrashMail = () => {
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>휴지통</PageTitle>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default TrashMail;
