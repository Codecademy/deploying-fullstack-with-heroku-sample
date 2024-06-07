import styled from 'styled-components';
import SimpleBarReact from 'simplebar-react';
import AppsFooter from '@crema/components/AppsContainer/AppsFooter';
import { darken, rgba } from 'polished';

export const StyledChatContentScreen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledChatNoScreen = styled.div`
  padding: 16px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 20px;
  }
`;

export const StyledNoUserScreen = styled.div`
  position: relative;

  & .message-icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.palette.gray[500]};
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      font-size: 5rem;
    }
  }
`;

export const StyledAddNewMessage = styled.div`
  display: flex;
`;

export const StyledNewMessageAction = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  & .message-btn {
    background-color: ${({ theme }) =>
      darken(0.05, theme.palette.background.paper)};
    color: ${({ theme }) => theme.palette.text.disabled};
    border: 0 none;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    height: 40px;
    width: 40px;
    padding: 5px;
    box-shadow: none;
    font-size: 20px;

    & .anticon-send {
      margin-left: 3px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 3px;
      }
    }

    & + .message-btn {
      margin-left: 10px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const StyledNewMsgActionFirst = styled(StyledNewMessageAction)`
  margin-left: 0;
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledChatHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & .user-info {
    width: 100%;
  }
`;
export const StyledChatHeaderAction = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  & .icon-btn {
    color: ${({ theme }) => theme.palette.text.secondary};
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.05)};
    margin-left: 5px;
    margin-right: 5px;

    &:hover,
    &:focus {
      background-color: ${() => rgba('black', 0.05)};
      color: ${({ theme }) => theme.palette.text.primary};
    }

    &.active {
      color: ${({ theme }) => theme.palette.primary.main};

      &:hover,
      &:focus {
        background-color: ${() => rgba('black', 0.05)};
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const StyledMessageScreen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledMsgScreenScrollbar = styled(SimpleBarReact)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100% - 132px);
`;

export const StyledScrollChatNoMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
`;
export const StyledNoMsg = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.gray[500]};
`;
export const StyledMsgAppsFooter = styled(AppsFooter)`
  margin-top: auto;
`;
