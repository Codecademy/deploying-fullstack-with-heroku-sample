import React from 'react';
import { momentLocalizer } from 'react-big-calendar';
import events from '../events';
import moment from 'moment';
import { StyledCalendar } from '../index.styled';
import styled from 'styled-components';

const localizer = momentLocalizer(moment);

export const AppCalendarWrapper = styled.div`
  font-family: 'Be Vietnam', serif;
  width: 100%;

  & .rbc-calendar {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    width: 100%;
    min-height: calc(100vh - 360px);
  }

  & .cr-app-calendar h3 {
    margin-bottom: 12px;
    font-weight: 400;
  }
`;

const Popup = () => {
  return (
    <AppCalendarWrapper className='cr-app-cul-calendar'>
      <h3 className='cr-app-calendar-title'>
        Click the +x more link on any calendar day that cannot fit all the days
        events to see an inline popup of all the events.
      </h3>
      <StyledCalendar
        popup
        localizer={localizer}
        events={events}
        defaultDate={new Date(2021, 10, 1)}
      />
    </AppCalendarWrapper>
  );
};

export default Popup;
