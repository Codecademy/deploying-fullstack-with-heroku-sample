import styled from 'styled-components';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { rgba } from 'polished';
import AppIconButton from '@crema/components/AppIconButton';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
`;

export const StyledCalendar = styled(Calendar)`
  & .rbc-event {
    min-height: 30px;
    background-color: transparent;
  }
  .rbc-overlay {
    background-color: red;
  }
  & .cr-calendar .react-daypicker-root .day.today,
  & .cr-calendar .react-daypicker-root .day.today:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  & .rbc-event,
  & .rbc-event.rbc-selected {
    background-color: transparent;
  }
  & .rbc-slot-selection {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  & rbc-event,
  & .rbc-day-slot,
  & .rbc-background-event {
    background-color: transparent;
  }
  & .rbc-toolbar button {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 100%;
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.palette.primary.main};
      border-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.contrastText};
    }
    &:active,
    &.rbc-active {
      background-color: ${({ theme }) => theme.palette.primary.main} !important;
      border-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.contrastText};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.palette.primary.main};
        border-color: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.primary.contrastText};
      }
    }
  }
  & .cr-calendar-color .header {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  & .rbc-off-range-bg {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
  & .rbc-row-segment a {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  & .cr-calendar table {
    color: #a8aaad;
    &th {
      color: #b1b5b8;
    }
  }
  & .cr-calendar .react-daypicker-root .day:hover:not(.empty),
  & .cr-calendar .react-daypicker-root .day.active {
    background-color: transparent;
    color: #888888;
  }
  & .cr-calendar-color .react-daypicker-root .previous-month,
  & .cr-calendar-color .react-daypicker-root .next-month,
  & .cr-calendar-color .react-daypicker-root .previous-month:hover,
  & .cr-calendar-color .react-daypicker-root .next-month:hover {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
  & .cr-calendar-color .header .month-year {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
  & .cr-calendar-color table thead th {
    color: #313541;
  }
  & .rbc-today {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
  & .rbc-show-more {
    background-color: transparent;
  }
`;

export const StyledTaskItemWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
`;

export const StyledTaskItemContainer = styled.div`
  border-radius: 8px 6px 6px 8px;
  min-width: 100px;
  height: 34px;
`;

export const StyledTitle = styled.div`
  padding: 6px 16px 6px 8px;
  margin: 0;
  color: ${({ theme }) => theme.palette.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
`;

export const StyledCommentWrapper = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 4px;
  padding-left: 4px;
  padding-right: 8px;
`;

export const StyledIconBtn = styled(AppIconButton)`
  color: ${({ theme }) => theme.palette.text.disabled} !important;
  background-color: ${({ theme }) =>
    rgba(theme.palette.primary.main, 0.05)}!important;
  padding: 8px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.main}!important;
  }
  &.active {
    color: ${({ theme }) => theme.palette.primary.main}!important;
  }
`;
