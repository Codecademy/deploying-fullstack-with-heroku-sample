import AppCard from '@crema/components/AppCard';
import AppScrollbar from '@crema/components/AppScrollbar';
import { Avatar, List } from 'antd';
import styled from 'styled-components';

export const StyledUpComingAppointCard = styled(AppCard)`
  position: relative;
`;

export const StyledUpComingScrollbar = styled(AppScrollbar)`
  height: 280px;
`;

export const StyledAppointmentCell = styled(List.Item)`
  display: flex;
  align-items: center;
  padding: 8px 20px !important;
  border-bottom: 0 none !important;
`;

export const StyledAppointmentCellAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledAppointmentCellContent = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};

  & h5 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 2px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 0;
  }
`;

export const StyledAppointmentCellAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledAppointmentCellTime = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-top: 2px;
  margin-bottom: 2px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
