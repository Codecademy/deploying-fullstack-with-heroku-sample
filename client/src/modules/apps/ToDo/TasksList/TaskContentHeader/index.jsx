import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import CheckedTasksActions from './CheckedTasksActions';
import { Checkbox } from 'antd';
import {
  StyledContentHeader,
  StyledTodoHeaderCheckboxView,
  StyledTodoHeaderPagination,
  StyledTodoSearch,
} from '../index.styled';
import ViewSelectButtons from './ViewSelectButtons';
import SelectTasksDropdown from './SelectTasksDropdown';
import {
  useTodoActionsContext,
  useTodoContext,
} from '../../../context/TodoContextProvider';

const TaskContentHeader = (props) => {
  const {
    checkedTasks,
    setCheckedTasks,
    filterText,
    onSetFilterText,
    onUpdateTasks,
  } = props;

  const { taskLists, page, viewMode } = useTodoContext();
  const { onPageChange, setViewMode } = useTodoActionsContext();

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const taskIds = taskLists?.data?.map((task) => task.id);
      setCheckedTasks(taskIds);
    } else {
      setCheckedTasks([]);
    }
  };

  const onSelectTasks = (value) => {
    switch (value) {
      case 0:
        setCheckedTasks(taskLists?.data?.map((task) => task.id));
        break;
      case 1:
        setCheckedTasks([]);
        break;

      case 2:
        setCheckedTasks(
          taskLists?.data
            ?.filter((task) => task.isStarred)
            .map((task) => task.id),
        );
        break;

      case 3:
        setCheckedTasks(
          taskLists?.data
            ?.filter((task) => task.hasAttachments)
            .map((task) => task.id),
        );
        break;

      default:
        setCheckedTasks([]);
    }
  };

  const { messages } = useIntl();
  console.log('pageView: ', viewMode);
  return (
    <>
      <StyledContentHeader>
        <StyledTodoHeaderCheckboxView>
          <Checkbox
            color='primary'
            indeterminate={
              checkedTasks?.length > 0 &&
              checkedTasks?.length < taskLists?.data?.length
            }
            checked={
              taskLists?.data?.length > 0 &&
              checkedTasks.length === taskLists?.data?.length
            }
            onChange={onHandleMasterCheckbox}
          />
        </StyledTodoHeaderCheckboxView>

        <SelectTasksDropdown onSelectTasks={onSelectTasks} />

        <StyledTodoHeaderCheckboxView>
          {checkedTasks.length > 0 ? (
            <CheckedTasksActions
              checkedTasks={checkedTasks}
              setCheckedTasks={setCheckedTasks}
              onUpdateTasks={onUpdateTasks}
            />
          ) : null}
        </StyledTodoHeaderCheckboxView>

        <StyledTodoSearch
          placeholder={messages['common.searchHere']}
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
        />
        <ViewSelectButtons pageView={viewMode} onChangePageView={setViewMode} />
      </StyledContentHeader>
      {viewMode === 'list' && taskLists?.length > 0 ? (
        <StyledTodoHeaderPagination
          count={taskLists?.count}
          page={page}
          onChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default TaskContentHeader;

TaskContentHeader.defaultProps = {
  checkedTasks: [],
  filterText: '',
  page: 0,
};

TaskContentHeader.propTypes = {
  taskLists: PropTypes.array,
  checkedTasks: PropTypes.array,
  setCheckedTasks: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  viewMode: PropTypes.string,
  onChangePageView: PropTypes.func,
  onUpdateTasks: PropTypes.func,
  setData: PropTypes.func,
};
