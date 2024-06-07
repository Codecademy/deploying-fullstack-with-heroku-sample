import AppTableContainer from '@crema/components/AppTableContainer';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledStudentInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStudentAvatar = styled(Avatar)`
  margin-right: 14px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }
`;

export const StyledStudentTitle = styled.h3`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 0;
`;

export const StyledStudentBadge = styled.span`
  padding: 4px 12px;
  border-radius: 30px;
  display: block;
  max-width: 115px;
  color: #d69d5a;
  background-color: #fef1e4;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledStudentTableContainer = styled(AppTableContainer)`
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
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 14px 8px;

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
  }
`;
