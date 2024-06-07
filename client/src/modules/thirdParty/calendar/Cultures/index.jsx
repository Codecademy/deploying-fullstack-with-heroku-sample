import React, { useState } from 'react';
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

// require('globalize/lib/cultures/globalize.culture.en-GB');
// require('globalize/lib/cultures/globalize.culture.es');
// require('globalize/lib/cultures/globalize.culture.fr');
// require('globalize/lib/cultures/globalize.culture.ar-AE');

const Cultures = () => {
  const [culture, setCulture] = useState('fr');

  let cultures = ['en', 'en-GB', 'es', 'fr', 'ar-AE'];
  let rtl = culture === 'ar-AE';

  return (
    <AppCalendarWrapper className='cr-app-cul-calendar'>
      <h3>
        <label>Select a Culture</label>
        <select
          className='cr-app-calendar-select'
          style={{ width: 200, display: 'inline-block' }}
          defaultValue={'fr'}
          onChange={(e) => setCulture(e.target.value)}
        >
          {cultures.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>
      </h3>
      <StyledCalendar
        rtl={rtl}
        localizer={localizer}
        events={events}
        // culture={this.state.culture}
        defaultDate={new Date(2021, 10, 1)}
      />
    </AppCalendarWrapper>
  );
};

export default Cultures;
