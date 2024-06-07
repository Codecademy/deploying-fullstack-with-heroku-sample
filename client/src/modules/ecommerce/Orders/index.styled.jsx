import AppsPagination from '@crema/components/AppsPagination';
import AppTableContainer from '@crema/components/AppTableContainer';
import styled from 'styled-components';

export const StyledOrderHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledOrderHeaderInputView = styled.div`
  max-width: 120px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 150px;
  }
`;
export const StyledOrderHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 10px;
  }
`;

export const StyledOrderHeaderPagination = styled(AppsPagination)`
  display: none;
  padding-left: 12px;
  padding-right: 2px;

  [dir='rtl'] & {
    padding-left: 2px;
    padding-right: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export const StyledOrderFooterPagination = styled(AppsPagination)`
  display: block;
  padding: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

export const StyledOrderId = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledOrderTable = styled(AppTableContainer)`
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
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }

    &.order-table-action {
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
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }

    &.order-table-action {
      text-align: center;
      background-color: ${({ theme }) =>
        theme.palette.background.paper} !important;
    }
  }

  & .badge {
    padding: 3px 10px;
    border-radius: ${({ theme }) => theme.cardRadius};
    display: inline-block;
  }
`;
