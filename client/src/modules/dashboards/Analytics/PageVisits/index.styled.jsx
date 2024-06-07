import AppTableContainer from '@crema/components/AppTableContainer';
import styled from 'styled-components';

export const StyledPageVisitTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;
    text-align: right;

    [dir='rtl'] & {
      text-align: left;
    }

    &:first-child {
      padding-left: 20px;
      text-align: left;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
        text-align: right;
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

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 14px 8px;
    text-align: right;

    [dir='rtl'] & {
      text-align: left;
    }

    &:first-child {
      padding-left: 20px;
      text-align: left;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
        text-align: right;
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

  & .anticon {
    margin-right: 8px;
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  & .up-icon {
    & .anticon {
      color: ${({ theme }) => theme.palette.success.main};
    }
  }

  & .down-icon {
    & .anticon {
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }
`;
