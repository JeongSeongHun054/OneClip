import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 100px);
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  p {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 15px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    margin-bottom: 1.2rem;
    font-weight: bold;
    font-size: 15px;
  }

  button {
    width: 250px;
    color: #fff;
    box-shadow: 0 2px 6px rgba(114, 124, 245, 0.5);
    background-color: #727cf5;
    border-color: #727cf5;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 0.45rem 0.9rem;
    font-size: 0.9rem;
    border-radius: 0.15rem;
    margin-bottom: 0.5rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;

    &:hover {
      color: #fff;
      background-color: #4e5bf2;
      border-color: #4250f2;
    }
  }

  input {
    width: 100%;
    display: block;
    height: calc(2.25rem + 2px);
    padding: 0.45rem 0.9rem;
    font-weight: 400;
    color: #6c757d;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
  }

  input[type="radio"] {
    width: 30px;
    height: 15px;
    display: inline-block;
  }

  label {
    width: 55px;
    font-size: 13px;
  }

  select {
    display: inline-block;
    width: 100%;
    height: calc(2.25rem + 2px);
    font-size: 0.9rem;
    font-weight: 400;
    color: #495057;
    vertical-align: middle;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
  }
`;

const Drafting = () => {
  return (
    <Form>
      <Box>
        <span>시행일자</span>
        <input type="date" />
      </Box>
      <Box>
        <span>보존연한</span>
        <input type="number" />
      </Box>
    </Form>
  );
};

export default Drafting;
