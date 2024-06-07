import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledChatUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDropDownItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;

  & .icon {
    margin-right: 8px;
    font-size: 20px;
    opacity: 0;
    visibility: hidden;
    display: block;
  }

  &.active .icon {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledChatUserAvatarView = styled.div`
  position: relative;
`;
export const StyledChatUserAvatar = styled(Avatar)`
  height: 45px;
  width: 45px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.palette.orange[5]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledChatUserStatusDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  border: 1px solid white;
  display: block;
  transition: all 0.3s ease;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 14px;
    height: 14px;
  }

  &.chat-user-status-dot-only {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }
`;

export const StyledChatUserStatus = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;

  [dir='rtl'] & {
    right: auto;
    left: 0;
  }

  & .ant-dropdown-link {
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 9px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    background-color: ${({ theme }) => theme.palette.background.paper};
    border: 1px solid ${({ theme }) => theme.palette.dividerColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    cursor: pointer;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 14px;
      height: 14px;
    }
  }

  &:hover {
    & .ant-dropdown-link {
      opacity: 1;
      visibility: visible;
    }

    & .chat-user-status-dot {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const StyledChatUserInfoContext = styled.div`
  padding-left: 14px;
  width: calc(100% - 45px);

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 16px;
  }
`;

export const StyledChatUserName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 2px;
`;
export const StyledChatUserStatusText = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
`;
