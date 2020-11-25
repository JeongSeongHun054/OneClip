import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Box = styled.div`
  width: 100%;
  display: flex;
  .col-1 {
    min-width: 260px;
    min-height: 100vh;
  }
  .col-2 {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = ({ children }) => {
  return (
    <Box className="Wrapper">
      <div className="col-1">
        <Header />
      </div>
      <div className="col-2">
        <Navbar />
        {children}
        <Footer />
      </div>
    </Box>
  );
};

export default Wrapper;
