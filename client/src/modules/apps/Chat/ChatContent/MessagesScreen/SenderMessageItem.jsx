import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  EditOutlined,
  FileTextOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Dropdown } from 'antd';
import clsx from 'clsx';
import {
  StyledChatMediaWrapper,
  StyledChatMsgListItem,
  StyledMediaAttach,
  StyledMediaCol,
  StyledMediaCounter,
  StyledMediaImg,
  StyledMediaRow,
  StyledMediaVideo,
  StyledMediaVideoIcon,
  StyledMessageTypePara,
  StyledMsgChat,
  StyledMsgChatAvatar,
  StyledMsgChatItem,
  StyledMsgChatSender,
  StyledMsgChatView,
  StyledMsgInfoEdit,
  StyledMsgMoreDropdownLink,
  StyledMsgTime,
} from './MessageItem.style';
import { getFileSize } from '@crema/helpers/Common';
import AppMediaViewer from '@crema/components/AppMedialViewer';
import { MessageType } from '@crema/mockapi/fakedb/apps/chat/connectionList';

const showMediaItems = 2;

const getMediaMessage = (item) => {
  if (item.mime_type.startsWith('image')) {
    return (
      <StyledMediaImg>
        <img alt='' src={item.url} />
      </StyledMediaImg>
    );
  } else if (item.mime_type.startsWith('video')) {
    return (
      <StyledMediaVideo>
        <video src={item.url} />
        <StyledMediaVideoIcon />
      </StyledMediaVideo>
    );
  } else {
    return (
      <StyledMediaAttach>
        <FileTextOutlined />
        <p>
          <span>{item.file_name}</span>
          <span>{getFileSize(item.file_size)}</span>
        </p>
      </StyledMediaAttach>
    );
  }
};

const getMessage = (item, setIndex) => {
  if (item.message_type === MessageType.TEXT) {
    return <StyledMessageTypePara>{item.message}</StyledMessageTypePara>;
  } else {
    return (
      <StyledChatMediaWrapper>
        <StyledMediaRow>
          {item.media.slice(0, showMediaItems).map((data, index) => (
            <StyledMediaCol
              key={'media-' + data.id}
              onClick={() => setIndex(index)}
            >
              {getMediaMessage(data)}
            </StyledMediaCol>
          ))}
          {item.media.length > showMediaItems ? (
            <StyledMediaCol onClick={() => setIndex(showMediaItems)}>
              <StyledMediaCounter>
                +{item.media.length - showMediaItems}
              </StyledMediaCounter>
            </StyledMediaCol>
          ) : null}
        </StyledMediaRow>
      </StyledChatMediaWrapper>
    );
  }
};
const SenderMessageItem = ({
  authUser,
  item,
  onClickEditMessage,
  isPreviousSender = false,
  deleteMessage,
  isLast,
}) => {
  const [index, setIndex] = useState(-1);
  const getUserAvatar = () => {
    const name = authUser.displayName;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (authUser.email) {
      return authUser.email.charAt(0).toUpperCase();
    }
  };

  const onClose = () => {
    setIndex(-1);
  };
  const items = [
    {
      key: 2,
      label: (
        <span
          onClick={() => {
            deleteMessage(item.id);
          }}
        >
          <IntlMessages id='common.delete' />
        </span>
      ),
    },
  ];

  if (item.message_type === MessageType.TEXT)
    items.unshift({
      key: 1,
      label: (
        <span
          onClick={() => {
            onClickEditMessage(item);
          }}
        >
          <IntlMessages id='common.edit' />
        </span>
      ),
    });

  return (
    <StyledChatMsgListItem
      className={clsx(
        'right',
        isPreviousSender ? 'hide-user-info' : 'first-chat-message',
        isLast ? 'last-chat-message' : '',
      )}
    >
      <StyledMsgChatView className='message-chat-view'>
        <StyledMsgChatItem className='message-chat-item'>
          <StyledMsgTime className='message-time'>{item.time}</StyledMsgTime>
          <StyledMsgChat className='message-chat'>
            {getMessage(item, setIndex)}

            {item.edited && (
              <StyledMsgInfoEdit>
                <EditOutlined />
              </StyledMsgInfoEdit>
            )}
          </StyledMsgChat>
        </StyledMsgChatItem>
        <StyledMsgChatSender className='message-chat-sender'>
          {authUser.photoURL ? (
            <StyledMsgChatAvatar
              size={34}
              className='message-chat-avatar'
              src={authUser.photoURL}
            />
          ) : (
            <StyledMsgChatAvatar className='message-chat-avatar'>
              {getUserAvatar()}
            </StyledMsgChatAvatar>
          )}
          <Dropdown menu={{ items }} trigger={['click']}>
            <StyledMsgMoreDropdownLink className='message-more-dropdown-link'>
              <MoreOutlined />
            </StyledMsgMoreDropdownLink>
          </Dropdown>
        </StyledMsgChatSender>
      </StyledMsgChatView>

      <AppMediaViewer index={index} medias={item.media} onClose={onClose} />
    </StyledChatMsgListItem>
  );
};

export default SenderMessageItem;

SenderMessageItem.defaultProps = {};

SenderMessageItem.propTypes = {
  authUser: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
  onClickEditMessage: PropTypes.func,
  deleteMessage: PropTypes.func,
};
