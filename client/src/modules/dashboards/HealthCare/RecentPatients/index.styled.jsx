import AppTableContainer from '@crema/components/AppTableContainer';
import styled from 'styled-components';

export const StyledRecentPatientUserInfo = styled.div`
  display: flex;
  align-items: center;

  & .ant-avatar {
    width: 40px;
    height: 40px;
    margin-right: 14px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 14px;
    }
  }
`;

export const StyledRecentPatientUserInfoContent = styled.div`
  flex: 1;

  & h3 {
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 13px;
  }
`;

export const StyledRecentPatientBadge = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  display: inline-block;
`;

export const StyledRecentPatientTable = styled(AppTableContainer)`
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
      text-align: right;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
        text-align: left;
      }
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 8px;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: right;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
        text-align: left;
      }
    }
  }

  & .cr-dropdown-link {
    display: inline-flex;
  }
`;
