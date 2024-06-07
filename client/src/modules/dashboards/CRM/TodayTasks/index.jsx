import React from 'react';
import TaskList from './TaskList';
// import DateSelector from './DateSelector';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledTaskCalendar,
  StyledTaskCalenderCol,
  StyledTodayTaskCard,
  StyledTodayTaskScrollbar,
} from './index,styled';

const TodayTasks = (props) => {
  const { todayTaskData } = props;
  const { messages } = useIntl();

  return (
    <StyledTodayTaskCard
      title={messages['dashboard.todayTasks']}
      heightFull
      extra={
        <div className='today-task-extra'>
          <a href='#' className='link link-grey link-hide'>
            <IntlMessages id='common.createTask' />
          </a>
          <a href='#' className='link'>
            <IntlMessages id='common.viewAll' />
          </a>
        </div>
      }
    >
      <AppRowContainer>
        <Col xs={24} md={12} xxl={14}>
          <StyledTodayTaskScrollbar>
            <TaskList todayTaskData={todayTaskData} />
          </StyledTodayTaskScrollbar>
        </Col>

        <StyledTaskCalenderCol xs={24} md={12} xxl={10}>
          <StyledTaskCalendar />
        </StyledTaskCalenderCol>
      </AppRowContainer>
    </StyledTodayTaskCard>
  );
};

export default TodayTasks;

TodayTasks.defaultProps = {
  todayTaskData: [],
};

TodayTasks.propTypes = {
  todayTaskData: PropTypes.array,
};
