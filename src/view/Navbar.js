import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CreateIcon from "@material-ui/icons/Create";

const Container = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    background-color: #fff;
    box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
    min-height: 70px;
    position: fixed;
    left: 260px;
    top: 0;
    right: 0;
    z-index: 999;

    form {
      display: flex;
      max-width: 320px;

      .input-group {
        input {
          height: 38px;
          width: 100%;
          background-color: #f1f3fa;
          border-top-left-radius: 0.95rem;
          border-bottom-left-radius: 0.95rem;
          padding-left: 40px;
          padding-right: 20px;
          position: relative;

          &::placeholder {
            color: #ccc;
          }
        }

        span {
          position: absolute;
          font-size: 20px;
          left: 35px;
          top: 25px;
        }
      }

      button {
        background-color: #727cf5;
        border-color: #727cf5;
        color: #fff;
        font-weight: 300;
        padding: 0.45rem 0.9rem;
        border-top-right-radius: 0.35rem;
        border-bottom-right-radius: 0.35rem;
        box-shadow: 0 2px 6px 0 rgba(114, 124, 245, 0.5);
        transition: all 0.15s ease-in-out;

        &:hover {
          background-color: #4e5bf2;
          border-color: #4250f2;
        }
      }
    }

    ul {
      display: flex;
      align-items: center;

      li {
        &:not(:last-child) {
          margin-right: 50px;
        }
        &:last-child {
          padding: 0.45rem 0.9rem;
          background-color: #f62459;
          border-radius: 0.34rem;
          transition: all 0.15s ease-in-out;
          cursor: pointer;
          &:hover {
            background-color: #db0a5b;
          }

          a {
            color: #fff;
          }
        }
        a {
          font-size: 14px;
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Container className="top-nav">
      <div className="navbar">
        <form>
          <div className="input-group">
            <input type="text" placeholder="Search..." />
            <span>
              <SearchIcon />
            </span>
          </div>
          <button type="submit">Search</button>
        </form>
        <ul>
          <li>
            <Link to="#">정성훈(개발팀/인턴)</Link>
          </li>
          <li>
            <Link to="/draft/draftWriting/writing">
              <CreateIcon />
            </Link>
          </li>
          <li>
            <Link to="#">
              <MailOutlineIcon fontSize="large" />
            </Link>
          </li>
          <li>
            <Link to="/login">로그아웃</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
