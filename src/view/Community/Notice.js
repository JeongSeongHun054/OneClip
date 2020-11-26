import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import PageTitle from "../common/PageTitle";
import ContentBody from "../common/ContentBody";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { noticeRemove } from "../../modules/noticeModules";

const PaginateWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
  }

  .pagination a {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6c7ac9;
    color: #6c7ac9;
  }

  .pagination__link {
    font-weight: bold;
  }

  .pagination__link--active a {
    color: #fff;
    background: #6c7ac9;
  }

  .pagination__link--disabled a {
    color: rgb(198, 197, 202);
    border: 1px solid rgb(198, 197, 202);
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 450px);
  grid-template-rows: repeat(4, 200px);
  justify-content: center;
  column-gap: 35px;
  row-gap: 35px;
  margin-bottom: 100px;

  li {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    background-color: #fff;
    border-radius: 0.25rem;
    border: none;
    box-shadow: 0 1px 1px 0 rgba(60, 75, 100, 0.14),
      0 2px 1px -1px rgba(60, 75, 100, 0.12), 0 1px 3px 0 rgba(60, 75, 100, 0.2);

    header {
      padding: 0.75rem 1.25rem;
      border-bottom: 1px solid #d8dbe0;
      text-align: center;
    }

    p {
      padding: 1.25rem;
      margin-bottom: 20px;
    }

    .button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        background-color: #fff;

        &:not(:last-child) {
          margin-right: 30px;
        }

        svg {
          height: 100%;
          background-color: #fff;
        }

        &.bookmark {
          background-color: #39afd1;
          border-color: #38afd1;
          text-align: center;
          border-radius: 0.35rem;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
          box-shadow: 0 2px 6px 0 rgba(57, 175, 209, 0.5);
          color: #fff;
          padding: 0.35rem 0.85rem;

          &:hover {
            background-color: #2b99b9;
            border-color: #2991ae;
          }
        }
      }
    }
  }
`;

const PER_PAGE = 12;

const Paginate = ({ data, onRemove }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div>
      <Ul>
        {data.slice(offset, offset + PER_PAGE).map((res) => (
          <li key={res.id}>
            <header>{res.title.slice(0, 50)}...</header>
            <p>{res.body.slice(0, 100)}...</p>
          </li>
        ))}
      </Ul>
      <PaginateWrapper>
        <ReactPaginate
          previousLabel={"← 이전"}
          nextLabel={"다음 →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </PaginateWrapper>
    </div>
  );
};

const Notice = () => {
  const data = useSelector((state) => state.noticeModules.datas);
  const dispatch = useDispatch();
  const onRemove = useCallback((id) => dispatch(noticeRemove(id)), [dispatch]);
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>공지사항</PageTitle>
          <Paginate data={data} onRemove={onRemove} />
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default Notice;
