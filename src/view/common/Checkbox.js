import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;

  input,
  label {
    cursor: pointer;
  }
`;

const Checkbox = (props) => {
  return (
    <Box>
      <input type="checkbox" id="check" />
      &nbsp;
      <label htmlFor="check">{props.boxname}</label>
    </Box>
  );
};

export default Checkbox;
