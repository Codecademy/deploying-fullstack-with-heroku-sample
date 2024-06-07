import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { StyledTodoDetailDatePicker } from '../index.styled';
import { getDateObject, getFormattedDate } from '@crema/helpers/DateHelper';

const DatePickers = (props) => {
  const { scheduleDate, scheduleEndDate, setScheduleDate, setScheduleEndDate } =
    props;

  const onHandleValue = (rangeValue, dateStrings) => {
    const [start_date, end_date] = dateStrings;
    setScheduleDate(getFormattedDate(start_date));
    setScheduleEndDate(getFormattedDate(end_date));
  };
  return (
    <StyledTodoDetailDatePicker className='form-field'>
      <DatePicker.RangePicker
        defaultValue={[
          getDateObject(scheduleDate),
          getDateObject(scheduleEndDate),
        ]}
        onChange={onHandleValue}
      />
    </StyledTodoDetailDatePicker>
  );
};

export default DatePickers;

DatePickers.propTypes = {
  scheduleDate: PropTypes.any,
  scheduleEndDate: PropTypes.any,
  setScheduleDate: PropTypes.func,
  setScheduleEndDate: PropTypes.func,
};
