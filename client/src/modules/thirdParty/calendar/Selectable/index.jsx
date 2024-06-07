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
const Selectable = () => {
  return (
    <AppCalendarWrapper className='cr-app-cul-calendar'>
      <h3 className='cr-app-calendar-title'>
        Click an event to see more info, or drag the mouse over the calendar to
        select a date/time range.
      </h3>
      <StyledCalendar
        selectable
        events={events}
        localizer={localizer}
        defaultView='week'
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2021, 10, 12)}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={(slotInfo) =>
          alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`,
          )
        }
      />
    </AppCalendarWrapper>
  );
};

export default Selectable;
