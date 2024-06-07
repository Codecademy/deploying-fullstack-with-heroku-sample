import React from 'react';
import ConnectionList from './ConnectionList';
import ChatList from './ChatList';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { BsChatSquareText } from 'react-icons/bs';
import { BiUserPin } from 'react-icons/bi';
import { StyledChatSidebarTabs, StyledTabItem } from '../index.styled';

const tabs = [
  { id: 333, name: <IntlMessages id='dashboard.messages' /> },
  { id: 323, name: <IntlMessages id='chatApp.contacts' /> },
];

const UserTabs = ({
  connectionListData,
  chatListData,
  loading,
  selectedUser,
  setSelectedUser,
}) => {
  const items = [
    {
      label: (
        <StyledTabItem>
          <BsChatSquareText />
          {tabs[0].name}
        </StyledTabItem>
      ),
      key: '1',
      children: (
        <ChatList
          chatListData={chatListData}
          loading={loading}
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
        />
      ),
    }, // remember to pass the key prop
    {
      label: (
        <StyledTabItem>
          <BiUserPin />
          {tabs[1].name}
        </StyledTabItem>
      ),
      key: '2',
      children: (
        <ConnectionList
          connectionListData={connectionListData}
          loading={loading}
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
        />
      ),
    },
  ];
  return <StyledChatSidebarTabs defaultActiveKey='1' items={items} />;
};

export default UserTabs;

UserTabs.defaultProps = {
  connectionListData: [],
  chatListData: [],
};

UserTabs.propTypes = {
  connectionListData: PropTypes.array,
  chatListData: PropTypes.array,
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
  loading: PropTypes.bool,
};
