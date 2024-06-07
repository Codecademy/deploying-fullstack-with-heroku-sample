import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';

const ChatContext = createContext();
const ChatActionsContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const useChatActionsContext = () => useContext(ChatActionsContext);

export const ChatContextProvider = ({ children }) => {
  const [{ apiData: connectionList, loading }, { setData: setConnectionData }] =
    useGetDataApi('/api/chatApp/connections', []);

  return (
    <ChatContext.Provider
      value={{
        connectionList,
        loading,
      }}
    >
      <ChatActionsContext.Provider
        value={{
          setConnectionData,
        }}
      >
        {children}
      </ChatActionsContext.Provider>
    </ChatContext.Provider>
  );
};
export default ChatContextProvider;

ChatContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
