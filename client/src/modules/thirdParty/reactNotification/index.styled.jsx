import styled from 'styled-components';
import { Button } from 'antd';

export const StyledReactNotification = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledReactNotificationItem = styled.div`
  margin: 4px;
`;

export const StyledNotificationCustomIcon = styled.div`
  flex-basis: 20%;
  position: relative;
  padding: 8px 8px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  [dir='rtl'] & {
    padding: 8px 12px 8px 8px;
  }

  & .anticon {
    color: white;
    font-size: 28px;
  }
`;

export const StyledNotificationCustomContent = styled.div`
  flex-basis: 80%;
  padding: 12px 12px 12px 8px;
  display: inline-block;

  [dir='rtl'] & {
    padding: 12px 8px 12px 12px;
  }
`;

export const StyledNotificationCustomImage = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;
export const StyledNotificationCustomImageContent = styled.span`
  padding: 8px 32px;
`;

export const StyledNotificationCustom = styled.div`
  &.notification-custom-success {
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.palette.green[6]};

    & .notification-custom-icon {
      border-left: 8px solid ${({ theme }) => theme.palette.green[7]};

      [dir='rtl'] & {
        border-left: 0 none;
        border-right: 8px solid ${({ theme }) => theme.palette.green[7]};
      }
    }
  }

  &.notification-custom-default {
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.palette.blue[5]};

    & .notification-custom-icon {
      border-left: 8px solid ${({ theme }) => theme.palette.blue[7]};

      [dir='rtl'] & {
        border-left: 0 none;
        border-right: 8px solid ${({ theme }) => theme.palette.blue[7]};
      }
    }
  }

  &.notification-custom-danger {
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.palette.warning.main};

    & .notification-custom-icon {
      border-left: 8px solid ${({ theme }) => theme.palette.warning.main};

      [dir='rtl'] & {
        border-left: 0 none;
        border-right: 8px solid ${({ theme }) => theme.palette.warning.main};
      }
    }
  }

  &.notification-custom-info {
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.palette.cyan[7]};

    & .notification-custom-icon {
      border-left: 8px solid ${({ theme }) => theme.palette.cyan[7]};

      [dir='rtl'] & {
        border-left: 0 none;
        border-right: 8px solid ${({ theme }) => theme.palette.cyan[7]};
      }
    }
  }

  &.notification-custom-warning {
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.palette.orange[5]};

    & .notification-custom-icon {
      border-left: 8px solid ${({ theme }) => theme.palette.orange[6]};

      [dir='rtl'] & {
        border-left: 0 none;
        border-right: 8px solid ${({ theme }) => theme.palette.orange[6]};
      }
    }
  }
`;

export const StyledNotificationInsetBtn = styled(Button)`
  margin: 4px 8px;
`;
