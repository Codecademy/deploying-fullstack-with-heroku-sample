import React, { useState } from 'react';
import { Badge, Calendar } from 'antd';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { StyledTodoEvents } from './index.styled';

const getListData = (value, data) => {
  let listData = [];
  data.map((task) => {
    if (
      value.format('MM-DD-YYYY') === dayjs(task.startDate).format('MM-DD-YYYY')
    ) {
      listData = listData.concat({
        color: task.priority ? task.priority.color : '#7c7c7c',
        title: task.title,
        id: task.id,
      });
    }
  });

  return listData || [];
};

const TaskCalender = ({ taskList }) => {
  const [isViewTodo, setIsViewToDo] = useState(false);
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  const onSelectDate = (value) => {
    setSelectedDate(value);
  };
  console.log('isAddTaskOpen', isAddTaskOpen);

  const onPanelChange = () => {
    onCloseAddTask();
  };
  const onOpenAddTask = () => {
    if (selectedDate) {
      setAddTaskOpen(true);
    } else {
      setAddTaskOpen(false);
    }
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onChangeViewToDo = () => {
    setIsViewToDo(!isViewTodo);
  };

  const dateCellRender = (value) => {
    const listData = getListData(value, taskList);
    return (
      <StyledTodoEvents>
        {listData.map((item) => (
          <li key={item.title}>
            <Badge
              color={item.color ? item.color : '#7c7c7c'}
              text={item.title}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onChangeViewToDo(item.id);
              }}
            />
          </li>
        ))}
      </StyledTodoEvents>
    );
  };

  return (
    <Calendar
      cellRender={dateCellRender}
      onSelect={(value) => {
        onSelectDate(value);
        onOpenAddTask();
      }}
      value={selectedDate}
      onPanelChange={onPanelChange}
    />
  );
};

TaskCalender.propTypes = {
  taskList: PropTypes.any,
};

export default TaskCalender;
