import { Select, Tabs } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

export const StyledBitcoinHeader = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const StyledBitcoinSelectBox = styled(Select)`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 32px;
  }

  &.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 30px;
  }

  &.ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 30px;
  }
`;

export const StyledBitcoinSelectOption = styled(Option)`
  cursor: pointer;
  padding: 12px;
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledBitcoinTitle = styled.div`
  display: flex;
  align-items: center;

  & h3 {
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    color: #1d39c4;
  }

  & span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.green[6]};
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export const StyledBitcoinTabs = styled(Tabs)`
  position: relative;
  margin-top: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-top: -26px;
  }

  & .ant-tabs-nav:before {
    display: none;
  }

  & .ant-tabs-nav-wrap,
  & .ant-tabs-nav-list {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      justify-content: flex-end;
    }
  }

  & .ant-tabs-tab {
    font-size: ${({ theme }) => theme.font.size.base};
    text-transform: capitalize;
    padding-top: 0;
    padding-bottom: 12px;
    margin-left: 4px;
    margin-right: 4px;
    min-width: 10px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-left: 6px;
      margin-right: 6px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;
