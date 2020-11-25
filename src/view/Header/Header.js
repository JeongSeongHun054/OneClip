import React from "react";
import styled from "styled-components";
import { Link, NavLink, withRouter } from "react-router-dom";

import logo from "../../lib/styles/images/logo_osd.png";

import DescriptionIcon from "@material-ui/icons/Description";
import ReceiptIcon from "@material-ui/icons/Receipt";
import FileCopySharpIcon from "@material-ui/icons/FileCopySharp";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ForumIcon from "@material-ui/icons/Forum";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Container = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #313a46;
  color: #8391a2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
  }
  ul {
    width: 100%;
    display: block;
    li {
      &:hover > a {
        color: #c5eff7;
      }

      .side-nav-second-level {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.448s ease-out;
      }

      a {
        display: flex;
        padding: 10px 30px;

        &.side-nav-active {
          color: #e8e8e8 !important;
        }

        &.rotateArrow {
          .arrow {
            transform: rotate(90deg);
          }

          ~ .side-nav-second-level {
            max-height: 500px;
            transition: max-height 0.9s ease-in;
          }
        }

        i {
          margin-right: 10px;
          transition: all 0.6s ease-in-out;
        }
        span {
          transition: all 0.6s ease-in-out;
        }
        .arrow {
          margin-left: auto;
        }
      }
    }
  }
`;

const Icon = styled.i``;

const Header = () => {
  const prevent = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    const li = e.target.closest("li");
    const ul = li.parentNode;

    ul.childNodes.forEach((child) => {
      child.childNodes[0].classList.remove("rotateArrow");
    });

    if (li.childNodes[1]) {
      li.childNodes[0].classList.add("rotateArrow");
    }
  };

  return (
    <Container>
      <h1>
        <Link to="/main">
          <img src={logo} alt="logo" />
        </Link>
      </h1>
      <ul onClick={onClick} className="side-nav-bar">
        <li className="side-nav-item">
          <NavLink
            to="/draft"
            activeStyle={{ color: "#e8e8e8" }}
            activeClassName="rotateArrow"
            onClick={prevent}
          >
            <Icon>
              <DescriptionIcon />
            </Icon>
            <span>기안</span>
            <Icon className="arrow">
              <ArrowRightIcon />
            </Icon>
          </NavLink>
          <ul className="side-nav-second-level">
            <li>
              <NavLink
                to="/draft/draftWriting"
                activeStyle={{ color: "#e8e8e8" }}
              >
                <span>기안함</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/draft/tempStore" activeStyle={{ color: "#e8e8e8" }}>
                <span>임시 저장함</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/draft/approval" activeStyle={{ color: "#e8e8e8" }}>
                <span>결재 완료함</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="side-nav-item">
          <NavLink to="/recept" activeStyle={{ color: "#e8e8e8" }}>
            <Icon>
              <ReceiptIcon />
            </Icon>
            <span>수신</span>
          </NavLink>
        </li>
        <li className="side-nav-item">
          <NavLink to="/pile" activeStyle={{ color: "#e8e8e8" }}>
            <Icon>
              <FileCopySharpIcon />
            </Icon>
            <span>편철</span>
          </NavLink>
        </li>
        <li className="side-nav-item">
          <NavLink to="/circuit" activeStyle={{ color: "#e8e8e8" }}>
            <Icon>
              <AccountTreeIcon />
            </Icon>
            <span>회람</span>
          </NavLink>
        </li>
        <li className="side-nav-item">
          <NavLink
            to="/mail"
            activeStyle={{ color: "#e8e8e8" }}
            activeClassName="rotateArrow"
            onClick={prevent}
          >
            <Icon>
              <MailOutlineIcon />
            </Icon>
            <span>메일</span>
            <Icon className="arrow">
              <ArrowRightIcon />
            </Icon>
          </NavLink>
          <ul className="side-nav-second-level">
            <li>
              <NavLink to="/mail/getMail" activeStyle={{ color: "#e8e8e8" }}>
                <span>받은 메일함</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mail/sendMail" activeStyle={{ color: "#e8e8e8" }}>
                <span>보낸 메일함</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mail/importantMail"
                activeStyle={{ color: "#e8e8e8" }}
              >
                <span>중요 메일함</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mail/tempMail" activeStyle={{ color: "#e8e8e8" }}>
                <span>임시 보관함</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mail/trashMail" activeStyle={{ color: "#e8e8e8" }}>
                <span>휴지통</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="side-nav-item">
          <NavLink
            to="/community"
            activeStyle={{ color: "#e8e8e8" }}
            activeClassName="rotateArrow"
            onClick={prevent}
          >
            <Icon>
              <ForumIcon />
            </Icon>
            <span>커뮤니티</span>
            <Icon className="arrow">
              <ArrowRightIcon />
            </Icon>
          </NavLink>
          <ul className="side-nav-second-level">
            <li>
              <NavLink
                to="/community/notice"
                activeStyle={{ color: "#e8e8e8" }}
              >
                <span>공지사항</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="side-nav-item">
          <NavLink to="/calendar" activeStyle={{ color: "#e8e8e8" }}>
            <Icon>
              <EventNoteIcon />
            </Icon>
            <span>일정관리</span>
          </NavLink>
        </li>
        <li className="side-nav-item">
          <NavLink to="/setting" activeStyle={{ color: "#e8e8e8" }}>
            <Icon>
              <SettingsIcon />
            </Icon>
            <span>환경설정</span>
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default withRouter(Header);
