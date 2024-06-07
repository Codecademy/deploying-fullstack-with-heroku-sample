import { Calendar } from 'antd';
import styled from 'styled-components';

export const StyledSchedulesRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
  & .schedules-item {
    width: 100%;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 50%;
      padding-right: 20px;
    }

    &:not(:first-of-type) {
      border-top: solid 1px ${({ theme }) => theme.palette.dividerColor};
      padding-top: 20px;
      margin-top: 20px;
      padding-right: 0px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        border-left: solid 1px ${({ theme }) => theme.palette.dividerColor};
        padding-left: 20px;
        border-top: 0 none;
        padding-top: 0;
        margin-top: 0;
      }
    }
  }
`;

export const StyledCellWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  & .dot-icon {
    height: 10px;
    width: 10px;
    min-width: 10px;
    border-radius: 50%;
    margin-right: 14px;
    margin-top: 3px;
  }
  & .schedule-cell-action {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-left: auto;
  }
`;

export const StyledTaskCalendar = styled(Calendar)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;

  & .ant-picker-calendar-header .ant-picker-calendar-mode-switch {
    display: flex;
  }

  & .ant-picker-panel {
    flex: 1;
    display: flex;
    flex-direction: column;

    & .ant-picker-month-panel {
      flex: 1;
    }
  }

  & .ant-picker-date-panel,
  & .ant-picker-panel .ant-picker-body,
  & .ant-picker-panel .ant-picker-content {
    height: 100%;
  }

  & .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 32px;
    padding: 0 6px;
  }

  &
    .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 30px;
  }

  & .ant-select-single .ant-select-selector .ant-select-selection-item,
  & .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 30px;
  }

  & .ant-picker-calendar-header .ant-picker-calendar-year-select {
    min-width: 50px;
  }

  & .ant-picker-calendar-header .ant-picker-calendar-month-select {
    min-width: 50px;
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  & .ant-radio-button-wrapper {
    height: 32px;
    padding: 0 6px;
    line-height: 32px;
  }

  & .ant-picker-panel .ant-picker-calendar-date-content {
    height: 4px;
  }
`;
