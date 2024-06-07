import AppCard from '@crema/components/AppCard';
import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledHcNotificationCard = styled(AppCard)`
  position: relative;
`;

export const StyledNotificationScroll = styled(AppScrollbar)`
  height: 280px;
`;

export const StyledHcNotificationCell = styled(List.Item)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 20px !important;
  border-bottom: 0 none !important;

  & .dot {
    height: 10px;
    width: 10px;
    min-width: 10px;
    margin-top: 6px;
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-right: 16px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 16px;
      }
    }
  }
`;

export const StyledNotificationContent = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};

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
