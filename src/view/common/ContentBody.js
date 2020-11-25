import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 1400px;
`;

const ContentBody = ({ children }) => {
  return <Box>{children}</Box>;
};

export default ContentBody;
