import AppCard from '@crema/components/AppCard';
import AppScrollbar from '@crema/components/AppScrollbar';
import { Calendar, Col, List } from 'antd';
import styled from 'styled-components';

export const StyledTodayTaskCard = styled(AppCard)`
  & .ant-row > .ant-col {
    margin-bottom: 0;
  }

  & .today-task-extra {
    position: relative;

    & .link {
      font-size: ${({ theme }) => theme.font.size.base};
      padding-left: 8px;
      padding-right: 8px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    & .link-grey {
      color: ${({ theme }) => theme.palette.gray[500]};
    }

    & .link-hide {
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
        display: none;
      }
    }
  }
`;

export const StyledTodayTaskScrollbar = styled(AppScrollbar)`
  height: 440px;
  padding: 5px;
`;

export const StyledTaskCalenderCol = styled(Col)`
  display: flex;
  flex-direction: column;
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

export const StyledTaskListItem = styled(List.Item)`
  border-bottom: 0 none !important;
  padding: 8px 20px !important;

  & .ant-list-item-meta-avatar {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-right: 16px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 16px;
      }
    }
  }
`;
