import React from "react";
import styled from "styled-components";

const H4 = styled.h4`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #6c757d;
`;

const PageTitle = ({ children }) => {
  return <H4>{children}</H4>;
};

export default PageTitle;
