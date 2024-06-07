import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Priority from './Priority';
import AppsStarredIcon from '@crema/components/AppsStarredIcon';
import dayjs from 'dayjs';
import { CheckOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import {
  StyledTodoListMobileAction,
  StyledTodoListMobileAvatar,
  StyledTodoListMobileContent,
  StyledTodoListMobileDate,
  StyledTodoListMobileItem,
  StyledTodoListMobileMain,
  StyledTodoListMobilePriority,
  StyledTodoListMobileTitle,
  StyledTodoListMobileView,
  StyledTodoListStarMobile,
} from './index.styled';

const TaskListItemMobile = ({
  task,
  checkedTasks,
  onChangeCheckedTasks,
  onChangeStarred,
}) => {
  const navigate = useNavigate();
  const { name } = useParams();

  const onViewTaskDetail = (task) => {
    navigate(`/apps/todo/${name}/${task.id}`);
  };

  return (
    <StyledTodoListMobileItem
      key={task.id}
      className={clsx('item-hover', {
        checked: checkedTasks.includes(task.id),
      })}
      onClick={() => onViewTaskDetail(task)}
    >
      <StyledTodoListMobileMain>
        <StyledTodoListMobileView
          className={clsx({
            checked: checkedTasks.includes(task.id),
          })}
          onClick={(event) => {
            event.stopPropagation();
            onChangeCheckedTasks(!checkedTasks.includes(task.id), task.id);
          }}
        >
          {checkedTasks.includes(task.id) ? (
            <CheckOutlined />
          ) : (
            <StyledTodoListMobileAvatar src={task?.assignedTo?.image} />
          )}
        </StyledTodoListMobileView>

        <StyledTodoListMobileContent>
          <StyledTodoListMobileTitle>
            <span className='text-truncate'>{task.title}</span>

            {task.priority ? (
              <StyledTodoListMobilePriority>
                <Priority priority={task.priority} />
              </StyledTodoListMobilePriority>
            ) : null}
          </StyledTodoListMobileTitle>
          <p className='text-truncate '>{task.content}</p>
        </StyledTodoListMobileContent>
      </StyledTodoListMobileMain>

      <StyledTodoListMobileAction>
        <StyledTodoListMobileDate>
          {dayjs(task.startDate).format('HH:mm A')}
        </StyledTodoListMobileDate>
        <StyledTodoListStarMobile onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon item={task} onChange={onChangeStarred} />
        </StyledTodoListStarMobile>
      </StyledTodoListMobileAction>
    </StyledTodoListMobileItem>
  );
};

export default TaskListItemMobile;

TaskListItemMobile.defaultProps = {
  checkedTasks: [],
};

TaskListItemMobile.propTypes = {
  task: PropTypes.object.isRequired,
  checkedTasks: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onChangeCheckedTasks: PropTypes.func,
};
