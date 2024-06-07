import IntlMessages from "@crema/helpers/IntlMessages";
import PropTypes from "prop-types";
import { CheckOutlined } from "@ant-design/icons";
import { StyledTodoDetailStatusBtn } from "../index.styled";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";

const StatusToggleButton = ({ selectedTask, onUpdateSelectedTask }) => {
  console.log("StatusToggleButton selectedTask", selectedTask);
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeTaskStatus = (status) => {
    const task = selectedTask;
    task.status = status;

    putDataApi("/api/calendar/task/", infoViewActionsContext, {
      task,
    })
      .then((data) => {
        onUpdateSelectedTask(data.task);
        infoViewActionsContext.showMessage("Task Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <>
      {selectedTask.status === 3 ? (
        <StyledTodoDetailStatusBtn
          className="bg-color"
          onClick={() => onChangeTaskStatus(1)}
        >
          <CheckOutlined className="check-icon" />
          <IntlMessages id="todo.completed" />
        </StyledTodoDetailStatusBtn>
      ) : (
        <StyledTodoDetailStatusBtn  onClick={() => onChangeTaskStatus(1003)}>
          <CheckOutlined className="check-icon" />
          <IntlMessages id="todo.markAsCompleted" />
        </StyledTodoDetailStatusBtn>
      )}
    </>
  );
};

export default StatusToggleButton;

StatusToggleButton.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
