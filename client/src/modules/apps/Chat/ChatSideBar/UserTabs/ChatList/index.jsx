import React from 'react';
import ChatItem from './ChatItem';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import { useIntl } from 'react-intl';
import ChatListSkeleton from '@crema/components/AppSkeleton/ChatListSkeleton';
import { StyledAppScrollbar, StyledChatSidebarTitle } from '../../index.styled';

const ChatList = ({ chatListData, loading, setSelectedUser, selectedUser }) => {
  const { messages } = useIntl();
  return (
    <StyledAppScrollbar>
      <StyledChatSidebarTitle>Connections</StyledChatSidebarTitle>
      <AppList
        data={chatListData}
        ListEmptyComponent={
          <ListEmptyResult
            content={messages['chatApp.noUserFound']}
            loading={loading}
            placeholder={<ChatListSkeleton />}
          />
        }
        renderItem={(item) => (
          <ChatItem
            key={item.id}
            item={item}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        )}
      />
    </StyledAppScrollbar>
  );
};

export default ChatList;

ChatList.propTypes = {
  chatListData: PropTypes.array,
  loading: PropTypes.bool,
  setSelectedUser: PropTypes.func,
  selectedUser: PropTypes.object,
};
