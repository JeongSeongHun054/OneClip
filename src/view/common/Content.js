import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  min-height: 90vh;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Content = ({ children }) => {
  return <Box className="content-box">{children}</Box>;
};

export default Content;
