import styled from 'styled-components';
import AppTableContainer from '@crema/components/AppTableContainer';

export const StyledInvoiceTable = styled(AppTableContainer)`
  & .ant-table {
    background-color: transparent;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    & table {
      table-layout: fixed !important;
    }

    & .ant-table-thead > tr > th {
      white-space: nowrap;
    }

    & .ant-table-tbody > tr > td {
      white-space: normal;
    }
  }

  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 24px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;
    text-transform: uppercase;
    text-align: right;
    color: ${({ theme }) => theme.palette.text.secondary};
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

    [dir='rtl'] & {
      text-align: left;
    }

    &:first-child {
      text-align: left;

      [dir='rtl'] & {
        text-align: right;
      }
    }
  }

  & .ant-table-tbody > tr.ant-table-row {
    &:hover td {
      background-color: transparent;
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 24px;
    text-align: right;
    vertical-align: top;
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

    [dir='rtl'] & {
      text-align: left;
    }

    &:first-child {
      text-align: left;

      [dir='rtl'] & {
        text-align: right;
      }
    }

    & h6 {
      font-size: 13px;
      text-transform: uppercase;
      margin-bottom: 0;
    }

    & p {
      margin-top: 8px;
      margin-bottom: 0;
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }

  & .ant-table-tbody > tr:last-child > td {
    border-bottom: 0 none;
  }
`;
export const StyledInvoiceTruncateView = styled.p`
  width: 160px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: auto;
  }

  & span {
    display: block;
  }
`;
