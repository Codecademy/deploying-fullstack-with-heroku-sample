import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { green, red } from '@ant-design/colors';
import {
  StyledChatAvatar,
  StyledChatListItem,
  StyledChatListItemContent,
} from '../../index.styled';
import {
  StyledChatUserAvatarView,
  StyledChatUserStatusDot,
} from '../../userInfo.styled';

const ChatItem = (props) => {
  const { item, selectedUser, setSelectedUser } = props;

  return (
    <StyledChatListItem
      className={clsx('item-hover', {
        active: selectedUser && selectedUser?.id === item.id,
      })}
      onClick={() => setSelectedUser(item)}
    >
      <StyledChatUserAvatarView>
        <StyledChatAvatar src={item.image} />
        <StyledChatUserStatusDot
          className='chat-user-status-dot chat-user-status-dot-only'
          style={{
            backgroundColor: item.status === 'online' ? green[6] : red[6],
          }}
        />
      </StyledChatUserAvatarView>
      <StyledChatListItemContent>
        <h3>{item.name}</h3>
        <p className='text-truncate mb-0'>{item.lastMessage.message}</p>
      </StyledChatListItemContent>
    </StyledChatListItem>
  );
};

export default ChatItem;

ChatItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
