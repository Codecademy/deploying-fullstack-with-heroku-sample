import React from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';
import { useParams } from 'react-router-dom';
import CalendarContextProvider from '../context/CalendarContextProvider';
import AppPageMeta from '@crema/components/AppPageMeta';

const ToDo = () => {
  const { id } = useParams();

  const { messages } = useIntl();

  const onGetMainComponent = () => {
    if (id) {
      return <TaskDetail />;
    } else {
      return <TasksList />;
    }
  };

  return (
    <CalendarContextProvider>
      <AppsContainer
        title={messages['sidebar.dataDisplay.calender']}
        sidebarContent={<TaskSideBar />}
      >
        <AppPageMeta title='Calendar App' />
        {onGetMainComponent()}
      </AppsContainer>
    </CalendarContextProvider>
  );
};

export default ToDo;

ToDo.propTypes = {
  match: PropTypes.object,
};
