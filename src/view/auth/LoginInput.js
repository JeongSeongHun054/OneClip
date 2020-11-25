import React from "react";
import styled from "styled-components";

const Span = styled.span`
  width: 20px;
  display: flex;
  position: relative;
  top: 25px;
  z-index: 10;
`;

const Input = styled.input`
  border-bottom: 1px solid #999;
  padding: 10px 35px;
  margin-bottom: 30px;

  &.focus::placeholder {
    color: black;
  }
`;

const LoginInput = ({ Icon, type, placeholder }) => {
  const onFocus = (e) => {
    let element = e.target;
    element.style.borderBottom = "1px solid black";
    element.classList.add("focus");
  };
  const onBlur = (e) => {
    let element = e.target;
    element.style.borderBottom = "1px solid #999";
    element.classList.remove("focus");
  };
  return (
    <>
      <Span>{<Icon fontSize="small" />}</Span>
      <Input
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </>
  );
};

export default LoginInput;
