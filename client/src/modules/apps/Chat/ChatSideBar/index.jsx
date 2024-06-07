import React, { useState } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import {
  StyledChatSidebar,
  StyledChatSidebarSearch,
  StyledChatSidebarSearchView,
  StyledChatSidebarUserView,
} from './index.styled';
import ChatUserInfo from './UserInfo';
import ChatUserTabs from './UserTabs';
import { useChatContext } from '../../context/ChatContextProvider';

const ChatSideBar = ({ selectedUser, setSelectedUser }) => {
  const { connectionList, loading } = useChatContext();
  const [keywords, setKeywords] = useState('');
  const { user } = useAuthUser();

  const getConnectionList = () => {
    if (keywords !== '') {
      return connectionList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    return connectionList;
  };

  const getChatList = () => {
    let chatsList = connectionList.filter((item) => item.lastMessage);
    if (keywords !== '') {
      chatsList = chatsList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    chatsList.sort((a, b) => {
      let momentA = dayjs(a.lastMessage.time).format('X');
      let momentB = dayjs(b.lastMessage.time).format('X');
      return momentB - momentA;
    });
    return chatsList;
  };

  const connectionListData = getConnectionList();

  const chatListData = getChatList();

  const { messages } = useIntl();

  return (
    <StyledChatSidebar>
      <StyledChatSidebarUserView>
        <ChatUserInfo user={user} showStatusActive={true} />
      </StyledChatSidebarUserView>

      <StyledChatSidebarSearchView>
        <StyledChatSidebarSearch
          placeholder={messages['common.searchHere']}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </StyledChatSidebarSearchView>

      <ChatUserTabs
        connectionListData={connectionListData}
        chatListData={chatListData}
        loading={loading}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </StyledChatSidebar>
  );
};

export default ChatSideBar;
ChatSideBar.propTypes = {
  loading: PropTypes.any,
  connectionList: PropTypes.array,
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
