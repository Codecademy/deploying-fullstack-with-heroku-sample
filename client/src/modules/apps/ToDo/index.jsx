import React from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';
import AppPageMeta from '@crema/components/AppPageMeta';
import { useParams } from 'react-router-dom';
import TodoContextProvider from '../context/TodoContextProvider';

const ToDo = () => {
  const paramas = useParams();
  const { id } = paramas;

  const onGetMainComponent = () => {
    if (id) {
      return <TaskDetail />;
    } else {
      return <TasksList />;
    }
  };

  const { messages } = useIntl();
  return (
    <TodoContextProvider>
      <AppsContainer
        title={messages['todo.todoApp']}
        sidebarContent={<TaskSideBar />}
      >
        <AppPageMeta title='Todo App' />
        {onGetMainComponent()}
      </AppsContainer>
    </TodoContextProvider>
  );
};

export default ToDo;

ToDo.defaultProps = {
  match: null,
};

ToDo.propTypes = {
  match: PropTypes.object,
};
