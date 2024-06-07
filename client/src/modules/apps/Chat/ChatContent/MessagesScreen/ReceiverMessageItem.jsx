import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditOutlined, FileTextOutlined } from '@ant-design/icons';
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
  StyledMsgChatView,
  StyledMsgInfoEdit,
  StyledMsgTime,
} from './MessageItem.style';
import { getFileSize } from '@crema/helpers/Common';
import { MessageType } from '@crema/mockapi/fakedb/apps/chat/connectionList';
import AppMediaViewer from '@crema/components/AppMedialViewer';

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

const ReceiverMessageItem = ({
  selectedUser,
  isPreviousSender = false,
  isLast,
  item,
}) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  return (
    <StyledChatMsgListItem
      className={clsx(
        'left',
        isPreviousSender ? 'hide-user-info' : 'first-chat-message',
        isLast ? 'last-chat-message' : '',
      )}
    >
      <StyledMsgChatView className='message-chat-view'>
        {isPreviousSender ? null : selectedUser.image ? (
          <StyledMsgChatAvatar
            size={34}
            className='message-chat-avatar'
            src={selectedUser.image}
          />
        ) : (
          <StyledMsgChatAvatar className='message-chat-avatar'>
            {selectedUser.name.charAt(0).toUpperCase()}
          </StyledMsgChatAvatar>
        )}

        <StyledMsgChatItem className='message-chat-item'>
          <StyledMsgTime className='message-time'>{item.time}</StyledMsgTime>
          <StyledMsgChat>
            {getMessage(item, setIndex)}

            {item.edited && (
              <StyledMsgInfoEdit>
                <EditOutlined />
              </StyledMsgInfoEdit>
            )}
          </StyledMsgChat>
        </StyledMsgChatItem>
      </StyledMsgChatView>
      <AppMediaViewer index={index} medias={item.media} onClose={onClose} />
    </StyledChatMsgListItem>
  );
};

export default ReceiverMessageItem;

ReceiverMessageItem.defaultProps = {};

ReceiverMessageItem.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
};
