import { PlayCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledChatMsgList = styled.div`
  position: relative;
  padding: 24px;
`;

export const StyledMediaImg = styled.div`
  position: relative;

  & img {
    width: 56px;
    height: 56px;
    display: block;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  }
`;

export const StyledMediaVideo = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  overflow: hidden;
  background-color: black;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 100%;
  }

  & video,
  & iframe,
  & embed,
  & object {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 0 none;
    object-fit: cover;
  }
`;

export const StyledMediaVideoIcon = styled(PlayCircleOutlined)`
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const StyledMediaAttach = styled.div`
  display: flex;
  flex-wrap: nowrap;

  & p {
    margin-left: 8px;
    margin-bottom: 0;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  & span {
    display: flex;
  }
`;

export const StyledMessageTypePara = styled.p`
  margin-bottom: 0;
  display: inline-block;
`;

export const StyledChatMediaWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
`;

export const StyledMediaRow = styled.div`
  margin: -4px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledMediaCol = styled.div`
  padding: 4px;
  cursor: pointer;
`;

export const StyledMediaCounter = styled.div`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.15)};
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledChatMsgListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 22px;

  &:first-child {
    margin-top: 0;
  }

  &.right {
    justify-content: flex-end;

    & .message-chat-item {
      text-align: right;

      [dir='rtl'] & {
        text-align: left;
      }
    }

    & .message-chat-avatar {
      margin-right: 0;
      margin-bottom: 0;

      [dir='rtl'] & {
        margin-left: 0;
      }
    }

    &:hover {
      & .message-more-dropdown-link {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &.right .message-chat-view {
    & .message-time {
      text-align: right;

      [dir='rtl'] & {
        text-align: left;
      }
    }
  }

  &.right .message-chat {
    text-align: left;
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
    border-radius: 10px 0 0 10px;

    [dir='rtl'] & {
      border-radius: 0 10px 10px 0;
      text-align: right;
    }
  }

  &.right.last-chat-message .message-chat {
    border-radius: 10px 0 10px 10px;

    [dir='rtl'] & {
      border-radius: 0 10px 10px 10px;
    }
  }

  &.hide-user-info {
    position: relative;
    margin-top: 1px;

    & .message-time,
    & .message-chat-avatar {
      display: none;
    }

    & .message-chat-sender {
      margin-bottom: 0;
    }

    & .message-chat-item {
      margin-left: 44px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 44px;
      }
    }

    &.right {
      & .message-chat-item {
        margin-left: 0;
        margin-right: 34px;

        [dir='rtl'] & {
          margin-right: 0;
          margin-left: 34px;
        }
      }
    }
  }
`;

export const StyledMsgChatView = styled.div`
  position: relative;
  display: flex;
`;

export const StyledMsgChatAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.orange[5]};
  margin-right: 10px;
  margin-bottom: 22px;
  min-width: 34px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }
`;

export const StyledMsgChatItem = styled.div`
  position: relative;
`;

export const StyledMsgTime = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.text.disabled};
  display: block;
`;

export const StyledMsgChat = styled.div`
  display: inline-flex;
  box-shadow: none;
  border-radius: 0 10px 10px 0;
  padding: 8px 12px;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.gray[200]};
  font-size: ${({ theme }) => theme.font.size.base};

  [dir='rtl'] & {
    border-radius: 10px 0 0 10px;
  }

  .last-chat-message & {
    border-radius: 0 10px 10px 10px;

    [dir='rtl'] & {
      border-radius: 10px 0 10px 10px;
    }
  }
`;

export const StyledMsgInfoEdit = styled.span`
  padding-left: 10px;
  color: ${({ theme }) => theme.palette.text.disabled};
  font-size: 18px;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 10px;
  }
`;

export const StyledMsgChatSender = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 10px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 10px;
  }
`;

export const StyledMsgMoreDropdownLink = styled.a`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.text.disabled};
  font-size: 20px;
  display: inline-block;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;
