import { Table } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledCartsFooter = styled.span`
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledCartTable = styled(Table)`
  & .ant-table {
    min-height: 0.01%;
    overflow-x: auto;

    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.md - 1}px) {
      width: 100%;
      overflow-y: hidden;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      border: 1px solid ${({ theme }) => theme.palette.borderColor};
    }
  }

  thead > tr > th,
  tbody > tr > th,
  tfoot > tr > th,
  thead > tr > td,
  tbody > tr > td,
  tfoot > tr > td {
    white-space: nowrap;
  }

  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    background-color: transparent;
    font-weight: ${({ theme }) => theme.font.weight.bold};

    &:first-child {
      text-align: left;
      padding-left: 20px;

      [dir='rtl'] & {
        text-align: right;
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

    &[colspan='5'] {
      padding: 0;
    }
  }

  & .ant-table-tbody > tr.ant-table-row {
    &:hover td {
      background-color: transparent;
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 8px;

    &:first-child {
      text-align: left;
      padding-left: 20px;

      [dir='rtl'] & {
        text-align: right;
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
  }

  & tbody > tr {
    transition: all 0.2s ease;
    transform: scale(1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 3px 10px 0 ${() => rgba('black', 0.2)};
      background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
    }
  }

  & .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: transparent;
  }
`;

export const StyledCartUser = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCartUserInfo = styled.div`
  margin-left: 12px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 0;
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;
  }
`;

export const StyledCartIncDec = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;

  & span {
    padding-left: 12px;
    padding-right: 12px;
  }
`;
