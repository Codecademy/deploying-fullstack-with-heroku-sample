import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { StyledTodoDetailDatePicker } from '../index.styled';

const DatePickers = (props) => {
  const { scheduleDate, setScheduleDate } = props;

  return (
    <StyledTodoDetailDatePicker className='form-field'>
      <DatePicker
        defaultValue={dayjs(scheduleDate, 'MMM DD,YYYY')}
        onChange={(value) => setScheduleDate(dayjs(value).format('YYYY/MM/DD'))}
      />
    </StyledTodoDetailDatePicker>
  );
};

export default DatePickers;

DatePickers.propTypes = {
  scheduleDate: PropTypes.any,
  setScheduleDate: PropTypes.func,
};
