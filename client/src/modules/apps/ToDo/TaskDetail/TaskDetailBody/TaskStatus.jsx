import React from "react";
import { Select } from "antd";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { StyledTodoSelectBox } from "../index.styled";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { useTodoContext } from "../../../context/TodoContextProvider";

const TaskStatus = ({ selectedTask, onUpdateSelectedTask }) => {
  const { statusList } = useTodoContext();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeStatus = (value) => {
    selectedTask.status = value;
    putDataApi("/api/todoApp/task/", infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data.task);
        infoViewActionsContext.showMessage("Task Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const { messages } = useIntl();

  return (
    <StyledTodoSelectBox
      onChange={(value) => onChangeStatus(value)}
      value={selectedTask?.status}
      placeholder={messages["common.status"]}
    >
      {statusList.map((status) => {
        return (
          <Select.Option key={status.type} value={status.type}>
            {status.name}
          </Select.Option>
        );
      })}
    </StyledTodoSelectBox>
  );
};

export default TaskStatus;

TaskStatus.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
