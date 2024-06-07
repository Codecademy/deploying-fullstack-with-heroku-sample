import React from 'react';
import AddTaskForm from './AddTaskForm';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledTodoModal } from './index.styled';

const AddNewTask = ({ isAddTaskOpen, onCloseAddTask }) => {
  const { messages } = useIntl();

  return (
    <StyledTodoModal
      width={900}
      title={messages['todo.addNewTask']}
      open={isAddTaskOpen}
      footer={false}
      onOk={isAddTaskOpen}
      onCancel={() => onCloseAddTask(false)}
    >
      <AddTaskForm onCloseAddTask={onCloseAddTask} />
    </StyledTodoModal>
  );
};

export default AddNewTask;

AddNewTask.propTypes = {
  isAddTaskOpen: PropTypes.bool.isRequired,
  onCloseAddTask: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  selectedDate: PropTypes.string,
};
