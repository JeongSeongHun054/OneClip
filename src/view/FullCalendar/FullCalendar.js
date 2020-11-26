import React, { useState } from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // needed for dayClick
import interactionPlugin from "@fullcalendar/interaction";
import CalendarModal from "./CalendarModal";

const Calendar = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState({
    title: "",
    date: "",
  });

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const Add = () => {
    const { title, date } = inputValue;
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
    setInputValue({
      title: "",
      date: "",
    });
    console.log(todos);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      {modalVisible && (
        <CalendarModal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="title"
              value={inputValue.title}
              onChange={onChange}
            />
            <input
              type="text"
              name="date"
              value={inputValue.date}
              onChange={onChange}
            />
            <input type="submit" />
          </form>
        </CalendarModal>
      )}

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={openModal}
        events={todos}
      />
    </>
  );
};

export default Calendar;
