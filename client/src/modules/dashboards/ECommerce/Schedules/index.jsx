import React from 'react';
import AppCard from '@crema/components/AppCard';
// import DateSelector from './DateSelector';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppList from '@crema/components/AppList';
import { Typography } from 'antd';
import {
  StyledCellWrapper,
  StyledSchedulesRoot,
  StyledTaskCalendar,
} from './index.styled';

const ScheduleCell = ({ data }) => {
  return (
    <StyledCellWrapper className='item-hover'>
      <span style={{ backgroundColor: data.color }} className='dot-icon' />
      <Typography.Title level={5}>{data.title}</Typography.Title>
      <span className='schedule-cell-action'>{data.day}th</span>
    </StyledCellWrapper>
  );
};

ScheduleCell.propTypes = {
  data: PropTypes.object,
};

const Schedules = ({ schedules }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.eCommerce.schedules']}
      action={messages['dashboard.eCommerce.addNewSchedules']}
      contentStyle={{ paddingTop: 8 }}
    >
      <StyledSchedulesRoot>
        <div className='schedules-item'>
          <StyledTaskCalendar schedules={schedules} />
        </div>
        <div className='schedules-item'>
          <AppList
            data={schedules}
            renderItem={(data) => (
              <ScheduleCell key={'schedule-' + data.id} data={data} />
            )}
          />
        </div>
      </StyledSchedulesRoot>
    </AppCard>
  );
};

export default Schedules;

Schedules.propTypes = {
  schedules: PropTypes.array,
};
