import AppCard from '@crema/components/AppCard';
import { InputNumber, Select, Tabs } from 'antd';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledBuyCellCard = styled(AppCard)`
  position: relative;

  & .ant-card-body {
    padding: 0;
  }
  & .ant-tabs-nav:before {
    display: none;
  }

  & .ant-tabs-tab {
    font-size: ${({ theme }) => theme.font.size.lg};
    text-transform: capitalize;
    padding-top: 4px;
    padding-bottom: 12px;
    margin-left: 8px;
    margin-right: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  & .ant-card-actions {
    border-top: 0 none;
    background-color: transparent;

    & li {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 16px;
      text-align: left;
      margin: 0;

      [dir='rtl'] & {
        text-align: right;
      }

      & a {
        color: ${({ theme }) => theme.palette.secondary.main} !important;
      }
    }
  }
`;

export const StyledTabForm = styled.form`
  position: relative;

  & .form-field {
    margin-bottom: 12px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-bottom: 20px;
    }
  }
`;

export const StyledTabFormRightText = styled.div`
  margin: 8px;
  text-align: right;
  color: ${({ theme }) => theme.palette.gray[400]};
  text-transform: uppercase;

  [dir='rtl'] & {
    text-align: left;
  }
`;

export const StyledSecondaryText = styled.span`
  margin-left: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledTabWrapper = styled.div`
  padding: 16px 20px;
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-nav-list {
    width: 100%;

    & .ant-tabs-tab {
      padding-top: 12px;
      padding-bottom: 12px;
      width: 50%;
      text-align: center;
      margin: 0;
      border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

      &:first-child {
        border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
      }
      & .ant-tabs-tab-btn {
        width: 100%;
        font-weight: ${({ theme }) => theme.font.weight.regular};
      }
    }
  }
`;

export const StyledCurrencyWrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};

  &.active {
    border: 1px solid ${({ theme }) => theme.palette.borderColor};
    .label {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  .label {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 8px;
  }
`;

export const StyledInput = styled(InputNumber)`
  width: 100%;
  .ant-input-number-group-addon {
    border: none;
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  .ant-select-selector {
    height: 60px !important;
    padding: 15px 10px !important;
    border: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;
