import React from 'react';
import ConnectionItem from './ConnectionItem';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import ChatListSkeleton from '@crema/components/AppSkeleton/ChatListSkeleton';
import { useIntl } from 'react-intl';
import { StyledAppScrollbar, StyledChatSidebarTitle } from '../../index.styled';

const ConnectionList = ({
  connectionListData,
  loading,
  selectedUser,
  setSelectedUser,
}) => {
  const { messages } = useIntl();
  return (
    <StyledAppScrollbar>
      <StyledChatSidebarTitle>Contacts</StyledChatSidebarTitle>
      <AppList
        data={connectionListData}
        ListEmptyComponent={
          <ListEmptyResult
            content={messages['chatApp.noUserFound']}
            loading={loading}
            placeholder={<ChatListSkeleton />}
          />
        }
        renderItem={(item) => (
          <ConnectionItem
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

export default ConnectionList;

ConnectionList.propTypes = {
  connectionListData: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
