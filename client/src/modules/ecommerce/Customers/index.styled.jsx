import AppsPagination from '@crema/components/AppsPagination';
import AppTableContainer from '@crema/components/AppTableContainer';
import { Form } from 'antd';
import styled from 'styled-components';

export const StyledCustomerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledCustomerInputView = styled.div`
  max-width: 120px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 150px;
  }
`;

export const StyledCustomerHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 10px;
  }
`;

export const StyledCustomerHeaderPagination = styled(AppsPagination)`
  display: none;
  padding-left: 12px;
  padding-right: 2px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }

  [dir='rtl'] & {
    padding-left: 2px;
    padding-right: 12px;
  }
`;
export const StyledCustomerFooterPagination = styled(AppsPagination)`
  display: block;
  padding: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

export const StyledEditCustomerForm = styled(Form)`
  position: relative;

  & .ant-form-item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledCustomerTable = styled(AppTableContainer)`
  & .ant-table table {
    table-layout: auto !important;
  }

  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 8px;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 12px;
      padding-left: 12px;
    }

    &.customer-table-actions {
      text-align: center;
      background-color: ${({ theme }) =>
        theme.palette.background.paper} !important;
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 12px 8px;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 8px;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 12px;
      padding-left: 12px;
    }

    &.customer-table-actions {
      text-align: center;
      background-color: ${({ theme }) =>
        theme.palette.background.paper} !important;
    }
  }

  & .badge {
    padding: 3px 8px;
    color: white;
    background-color: ${({ theme }) => theme.palette.green[6]};
    width: 45px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    height: 18px;
    border-radius: 10px;
    font-size: ${({ theme }) => theme.font.size.sm};

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;
