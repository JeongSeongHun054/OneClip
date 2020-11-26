import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .input {
    width: 100%;
    height: 45px;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
    border: 1px solid #d4d5d6;
    color: #565656;

    &:focus {
      border-color: cornflowerblue;
    }

    .has-error {
      border-color: tomato;
    }
  }

  .tag-item {
    background-color: dodgerblue;
    font-size: 14px;
    border-radius: 30px;
    height: 30px;
    padding: 0 4px 0 1rem;
    display: inline-flex;
    align-items: center;
    margin: 0 0.3rem 0.3rem 0;
    color: white;

    .button {
      background-color: white;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      font: inherit;
      margin-left: 10px;
      font-weight: bold;
      padding: 0;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .error {
    margin: 0;
    font-size: 90%;
    color: tomato;
  }
`;

const InputBadge = () => {
  const [value, setValue] = useState("");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(null);
  };

  const handleKeyDown = (e) => {
    if (["Enter", "Tap", ","].includes(e.key)) {
      e.preventDefault();

      let email = value.trim();

      if (email && isValid(email)) {
        setEmails([...emails, email]);
      }
      setValue("");
    }
  };

  const handleDelete = (toBeRemoved) => {
    setEmails(emails.filter((email) => email !== toBeRemoved));
  };

  const isValid = (email) => {
    console.log(emails);
    let error = null;

    if (!isEmail(email)) {
      error = `${email} is not a valid email address`;
    }

    if (isInList(email)) {
      error = `${email} has already been added`;
    }

    if (error) {
      setError(error);

      return false;
    }

    return true;
  };

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  const isInList = (email) => {
    return emails.includes(email);
  };

  const handlePaste = (e) => {
    e.preventDefault();

    let paste = e.clipboardData.getData("text");
    let mails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (mails) {
      let toBeAdded = mails.filter((mail) => !isInList(mail));

      setEmails([...emails, ...toBeAdded]);
    }
  };

  return (
    <Wrapper>
      {emails.map((email) => (
        <div key={email} className="tag-item">
          {email}
          <button
            type="button"
            className="button"
            onClick={() => handleDelete(email)}
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        className={"input " + (error && " has-error")}
        placeholder="받는 사람"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
      />

      {error && <p className="error">{error}</p>}
    </Wrapper>
  );
};

export default InputBadge;
