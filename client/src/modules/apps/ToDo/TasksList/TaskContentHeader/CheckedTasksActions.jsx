import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppsDeleteIcon from '@crema/components/AppsDeleteIcon';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
import { MdLabelOutline } from 'react-icons/md';
import { StyledTodoHeaderCheckedAction } from '../index.styled';
import { putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import {
  useTodoActionsContext,
  useTodoContext,
} from '../../../context/TodoContextProvider';

const CheckedTasksActions = ({
  checkedTasks,
  setCheckedTasks,
  onUpdateTasks,
}) => {
  const { page, labelList } = useTodoContext();
  const { setTodoData } = useTodoActionsContext();
  const { pathname } = useLocation();
  const path = pathname.split('/');
  const infoViewActionsContext = useInfoViewActionsContext();

  const onDeleteTasks = () => {
    putDataApi('/api/todo/update/folder', infoViewActionsContext, {
      taskIds: checkedTasks,
      type: path[path.length - 2],
      name: path[path.length - 1],
      page,
    })
      .then((data) => {
        setTodoData(data);
        infoViewActionsContext.showMessage('Task Deleted Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    setCheckedTasks([]);
  };

  const onSelectLabel = (key) => {
    putDataApi('/api/todo/update/label', infoViewActionsContext, {
      taskIds: checkedTasks,
      type: +key,
    })
      .then((data) => {
        onUpdateTasks(data);
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    setCheckedTasks([]);
  };

  const menuLabel = labelList.map((label, index) => {
    return {
      key: index,
      label: <span onClick={() => onSelectLabel(label.id)}> {label.name}</span>,
    };
  });

  return (
    <>
      <StyledTodoHeaderCheckedAction>
        <AppsDeleteIcon
          deleteAction={onDeleteTasks}
          deleteTitle={<IntlMessages id='todo.deleteMessage' />}
        />

        <Dropdown menu={{ items: menuLabel }} trigger={['click']}>
          <Button type='circle'>
            <MdLabelOutline />
          </Button>
        </Dropdown>
      </StyledTodoHeaderCheckedAction>
    </>
  );
};

export default CheckedTasksActions;

CheckedTasksActions.propTypes = {
  checkedTasks: PropTypes.array.isRequired,
  setCheckedTasks: PropTypes.func,
  onUpdateTasks: PropTypes.func,
  setData: PropTypes.func,
  page: PropTypes.number.isRequired,
};
