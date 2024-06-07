import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';
import { Calendar } from 'antd';

export const StyledWidCalendarCard = styled(AppCard)`
  overflow: hidden;
`;
export const StyledWidDateCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  & .ant-picker-calendar-header {
    padding: 12px;
    justify-content: center;
  }

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

  & .ant-picker-calendar .ant-picker-panel .ant-picker-body {
    padding: 8px;
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
