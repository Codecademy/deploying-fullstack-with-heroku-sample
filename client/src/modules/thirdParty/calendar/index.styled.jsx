import styled from 'styled-components';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  .rbc-event,
  .rbc-day-slot .rbc-background-event {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .rbc-show-more {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  .cr-calendar .react-daypicker-root .day.today,
  .cr-calendar .react-daypicker-root .day.today:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .rbc-toolbar .rbc-btn-group,
  .rbc-toolbar .rbc-toolbar-label {
    margin-bottom: 6px;
  }

  [dir='rtl']
    .rbc-toolbar
    .rbc-btn-group
    > button:first-child:not(:last-child) {
    border-radius: 0 4px 4px 0;
  }

  [dir='rtl']
    .rbc-toolbar
    .rbc-btn-group
    > button:last-child:not(:first-child) {
    border-radius: 4px 0 0 4px;
  }

  .rbc-event .rbc-event.rbc-selected {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .rbc-slot-selection {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .rbc-toolbar button {
    cursor: pointer;
    color: #6b7280;
    font-size: 100%;
  }

  .rbc-toolbar button:hover,
  .rbc-toolbar button:focus {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    color: #fff;
  }

  .rbc-toolbar button:active,
  .rbc-toolbar button.rbc-active {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    color: #fff;
  }

  .rbc-toolbar button:active:hover,
  .rbc-toolbar button.rbc-active:hover,
  .rbc-toolbar button:active:focus,
  .rbc-toolbar button.rbc-active:focus {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    color: #fff;
  }

  .cr-calendar-color .header {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .rbc-off-range-bg {
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .rbc-row-segment a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .cr-calendar table {
    color: #a8aaad;
  }

  .cr-calendar table th {
    color: #b1b5b8;
  }

  .cr-calendar .react-daypicker-root .day:hover:not(.empty),
  .cr-calendar .react-daypicker-root .day.active {
    background-color: transparent;
    color: #888888;
  }

  .cr-calendar-color .react-daypicker-root .previous-month,
  .cr-calendar-color .react-daypicker-root .next-month,
  .cr-calendar-color .react-daypicker-root .previous-month:hover,
  .cr-calendar-color .react-daypicker-root .next-month:hover {
    color: #fff;
  }

  .cr-calendar-color .header .month-year {
    color: #fff;
  }

  .cr-calendar-color table thead th {
    color: #313541;
  }

  .rbc-today {
    background-color: #fff;
  }

  .rbc-show-more {
    background-color: transparent;
  }

  .rbc-calendar {
    font-family: 'Be Vietnam', serif;
    width: 100%;
  }

  .cr-app-calendar {
    font-family: 'Be Vietnam', serif;
    width: 100%;
  }

  .cr-app-calendar .rbc-calendar {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    width: 100%;
    min-height: calc(100vh - 360px);
  }

  .cr-app-calendar h3 {
    margin-bottom: 12px;
    font-weight: 400;
  }

  .cr-app-calendar-title {
    font-size: 16px;
  }

  @media screen and (min-width: 1600px) {
    .cr-app-calendar-title {
      font-size: 18px;
    }
  }

  .cr-app-calendar-select {
    margin-left: 12px;
    background-color: #fff;
    color: #111827;
  }

  .cr-app-cul-calendar .rbc-calendar {
    min-height: calc(100vh - 400px);
  }

  .rbc-toolbar button:active,
  .rbc-toolbar button.rbc-active {
    background-image: none;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    -moz-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }

  .rbc-month-row {
    min-height: 100px;
  }

  .rbc-event {
    min-height: 50px;
  }

  .rbc-event:focus {
    outline: none;
  }

  .cr-calendar .react-daypicker-root {
    border: solid 1px #e5e9ec;
    border-radius: 30px;
    padding: 30px;
    width: 100%;
    height: 100%;
  }

  .cr-calendar table {
    width: 100%;
    height: calc(100% - 30px);
  }

  .cr-calendar table td {
    position: relative;
  }

  .cr-calendar table th {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 15px;
  }

  .cr-calendar .header .month-year {
    font-weight: 600;
    padding-top: 3px;
  }

  .cr-calendar-color .react-daypicker-root {
    border: 0 none;
    font-size: 20px;
  }

  .cr-calendar-color .header {
    padding: 30px;
    margin: -30px -30px 0;
  }

  .cr-calendar-color .header .month-year {
    font-size: 22px;
  }

  .cr-calendar-color table {
    font-weight: 600;
    height: calc(100% - 60px);
  }

  .cr-calendar-color table thead th {
    font-weight: 600;
    font-size: 20px;
  }

  @media screen and (max-width: 1919px) {
    .cr-calendar .react-daypicker-root {
      padding: 20px;
    }

    .cr-calendar .react-daypicker-root th,
    .cr-calendar .react-daypicker-root td {
      width: 30px;
    }

    .cr-calendar table th,
    .cr-calendar table td {
      font-size: 12px;
    }

    .cr-calendar-color .react-daypicker-root {
      font-size: 16px;
    }

    .cr-calendar-color .header {
      padding: 20px;
      margin: -20px -20px 0;
    }

    .cr-calendar-color .header .month-year {
      font-size: 18px;
    }

    .cr-calendar-color table thead th {
      font-size: 15px;
    }

    .cr-calendar-color table {
      height: calc(100% - 70px);
    }
  }

  @media screen and (max-width: 1367px) {
    .cr-calendar-color table thead th {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 959px) {
    .rbc-toolbar {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
    }

    .rbc-toolbar .rbc-toolbar-label {
      margin: 8px 0;
    }

    .cr-calendar table {
      height: auto;
    }
  }

  @media screen and (max-width: 599px) {
    .cr-calendar .react-daypicker-root {
      padding: 10px;
    }

    .cr-calendar .react-daypicker-root th,
    .cr-calendar .react-daypicker-root td {
      width: 20px;
    }

    .cr-app-calendar .rbc-calendar {
      min-height: 400px;
    }

    .cr-app-cul-calendar .rbc-calendar {
      min-height: 400px;
    }
  }

  @media screen and (max-width: 575px) {
    .rbc-toolbar {
      font-size: 12px;
    }

    .rbc-toolbar button {
      padding: 5px 8px;
    }

    .cr-calendar table th,
    .cr-calendar table td {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 399px) {
    .rbc-toolbar button {
      font-size: 10px;
    }
  }
`;
