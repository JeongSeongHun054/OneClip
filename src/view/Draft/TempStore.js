import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import Content from "../common/Content";
import PageTitle from "../common/PageTitle";
import ContentBody from "../common/ContentBody";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { tempStoreRemove } from "../../modules/tempModules";

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
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(3, 150px);
  justify-content: center;
  column-gap: 35px;
  row-gap: 35px;
  margin-bottom: 100px;
  li {
    position: relative;
    height: 100%;
    background-color: #fff;
    border-radius: 0.25rem;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

    .writing-type {
      position: absolute;
      top: -15px;
      left: -10px;
      width: 40px;
      height: 40px;
      font-size: 14px;
      background-color: #23cba7;
      text-align: center;
      line-height: 40px;
      border-radius: 0.45rem;
      box-shadow: 0 2px 6px 0 rgba(114, 124, 245, 0.3);
      border: 1px solid #23cba7;
      color: white;
    }
    button {
      display: block;
      position: absolute;
      top: 5px;
      left: 150px;
      width: 40px;
      height: 30px;
      font-size: 13px;
      background-color: #6c757d;
      border-color: #6c757d;
      border-radius: 0.45rem;
      color: #fff;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;

      &:hover {
        background-color: #5a6268;
        border-color: #5a6268;
      }
    }
    a {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .title {
      color: #333333;
      margin: 60px auto 40px;
    }

    .date {
      margin-left: 100px;
      color: #787878;
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
            <span className="writing-type">휴가</span>
            <button onClick={() => onRemove(res.id)}>삭제</button>
            <Link to="#">
              <span className="title">{res.title.slice(0, 15)}...</span>
              <span className="date">{`${new Date().getFullYear()}-${
                new Date().getMonth() + 1
              }-${new Date().getDate()}`}</span>
            </Link>
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

const TempStore = () => {
  const data = useSelector((state) => state.tempModules.datas);
  const dispatch = useDispatch();
  const onRemove = useCallback((id) => dispatch(tempStoreRemove(id)), [
    dispatch,
  ]);
  return (
    <Wrapper>
      <Content>
        <ContentBody>
          <PageTitle>임시저장함</PageTitle>
          <Paginate data={data} onRemove={onRemove} />
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

export default TempStore;
