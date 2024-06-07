import AppScrollbar from '@crema/components/AppScrollbar';
import { Avatar, List } from 'antd';
import styled from 'styled-components';

export const StyledDoctorCell = styled(List.Item)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 8px 20px !important;
  border-bottom: 0 none !important;
`;

export const StyledDoctorAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  min-width: 48px;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledDoctorContent = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-right: 10px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }

  & h5 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 2px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledDoctorAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  & .ant-btn {
    padding: 4px 10px;
    height: 30px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding: 7.5px 15px;
      height: 36px;
    }
  }
`;

export const StyledDrScrollbar = styled(AppScrollbar)`
  height: 280px;
`;
