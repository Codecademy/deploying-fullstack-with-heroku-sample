import React from 'react';
import { StyledChatContentScreen, StyledChatNoScreen } from './index.styled';
import PropTypes from 'prop-types';
import NoUserScreen from './NoUserScreen';
import MessagesScreen from './ChatViewContainer';

const ChatContent = ({ selectedUser, setSelectedUser }) => {
  return (
    <>
      {selectedUser ? (
        <StyledChatContentScreen>
          <MessagesScreen
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </StyledChatContentScreen>
      ) : (
        <StyledChatNoScreen>
          <NoUserScreen />
        </StyledChatNoScreen>
      )}
    </>
  );
};

export default ChatContent;
ChatContent.propTypes = {
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
