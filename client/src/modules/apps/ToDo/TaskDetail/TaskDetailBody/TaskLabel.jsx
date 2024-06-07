import React from 'react';
import { Select } from 'antd';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { useTodoContext } from '../../../context/TodoContextProvider';

const TaskLabel = ({ selectedTask, onUpdateSelectedTask }) => {
  const { labelList } = useTodoContext();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangePriority = (value) => {
    selectedTask.label = labelList.filter((label) => value.includes(label.id));
    putDataApi('/api/todoApp/task/', infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data.task);
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const { messages } = useIntl();
  return (
    <Select
      placeholder={messages['common.label']}
      maxTagCount={2}
      style={{ minWidth: 100 }}
      mode='multiple'
      defaultValue={selectedTask?.label.map((label) => label.id)}
      onChange={onChangePriority}
    >
      {labelList.map((label) => {
        return (
          <Select.Option value={label.id} key={label.id}>
            {label.name}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default TaskLabel;

TaskLabel.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
