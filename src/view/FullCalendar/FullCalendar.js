import React, { useState } from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // needed for dayClick
import interactionPlugin from "@fullcalendar/interaction";
import CalendarModal from "./CalendarModal";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 45px;
    padding: 1rem;
    border-radius: 0.2rem;
    border: 1px solid #d4d5d6;
    color: #565656;
    font-size: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  input[type="submit"] {
    color: #fff;
    background-color: #38afd1;
    border-color: #38adf1;
    box-shadow: 0 2px 6px 0 rgba(57, 175, 209, 0.5);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    &:hover {
      background-color: #2b99b9;
      border-color: #2991ae;
    }
  }
`;

const Calendar = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const Add = () => {
    setTodos(
      todos.concat({
        title,
        date,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Add();
    closeModal();
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (e) => {
    setModalVisible(true);
    setDate(e.dateStr);
  };
  const closeModal = () => {
    setModalVisible(false);
    setTitle("");
    setDate("");
  };
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={openModal}
        events={todos}
      />

      {modalVisible && (
        <CalendarModal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          <Form onSubmit={onSubmit}>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              autoFocus
            />
            <input
              type="text"
              name="date"
              value={date}
              onChange={onChange}
              style={{ textAlign: "center" }}
            />
            <input type="submit" value="등록" />
          </Form>
        </CalendarModal>
      )}
    </>
  );
};

export default Calendar;
