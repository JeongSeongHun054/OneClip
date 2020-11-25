import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  border-top: 1px solid rgba(152, 166, 173, 0.2);
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 19px 24px 20px;
  color: #98a6ad;
  //margin-top: 30px;
`;

const Footer = () => {
  return (
    <FooterBox>
      &copy; 2020{" "}
      <span>
        <strong>Onesoftdigm</strong> Corp. All Rights Reserved.
      </span>
    </FooterBox>
  );
};

export default Footer;
