import React from 'react';

import { StyledWidCalendarCard, StyledWidDateCalendar } from './index.styled';

const DateSelector = () => {
  return (
    <StyledWidCalendarCard heightFull className='no-card-space'>
      <StyledWidDateCalendar />
    </StyledWidCalendarCard>
  );
};

export default DateSelector;
