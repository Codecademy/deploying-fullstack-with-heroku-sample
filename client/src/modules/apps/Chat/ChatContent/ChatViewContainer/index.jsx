import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import {
  StyledMessageScreen,
  StyledMsgAppsFooter,
  StyledMsgScreenScrollbar,
  StyledNoMsg,
  StyledScrollChatNoMain,
} from "../index.styled";
import { postDataApi, putDataApi, useGetDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import { MessageType } from "@crema/mockapi/fakedb/apps/chat/connectionList";

import AddNewMessage from "../MessagesScreen/AddNewMessage";
import Header from "../MessagesScreen/Header";
import MessagesList from "../MessagesScreen/MessagesList";
import { useChatActionsContext } from "../../../context/ChatContextProvider";

const MessagesScreen = ({ selectedUser, setSelectedUser }) => {
  const { setConnectionData } = useChatActionsContext();
  const [message, setMessage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();

  const [selectedMessage, setSelectedMessage] = useState(null);

  const [{ apiData: userMessages }, { setQueryParams, setData }] =
    useGetDataApi("/api/chatApp/connection/messages", {}, {}, false);
  console.log("userMessages//", userMessages);

  const { user } = useAuthUser();

  let _scrollBarRef = useRef(null);
  useEffect(() => {
    setQueryParams({ id: selectedUser?.channelId });
  }, [selectedUser?.channelId]);

  useEffect(() => {
    if (userMessages?.messageData?.length > 0) {
      if (_scrollBarRef?.current) {
        const scrollEl = _scrollBarRef.current.getScrollElement();
        scrollEl.scrollTop = scrollEl.scrollHeight;
      }
    }
  }, [userMessages, _scrollBarRef]);

  const sendFileMessage = (fileMessage) => {
    const data = {
      ...fileMessage,
      sender: user.id,
      time: dayjs().format("llll"),
    };
    postDataApi("/api/chatApp/message", infoViewActionsContext, {
      channelId: selectedUser?.channelId,
      message: data,
    })
      .then((data) => {
        console.log("data", data);
        setData({ ...userMessages, messageData: data?.userMessages });
        setConnectionData(data?.connectionData);
        infoViewActionsContext.showMessage("Message Added Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onSend = (message) => {
    const data = {
      ...selectedMessage,
      message,
      message_type: MessageType.TEXT,
      sender: user.id,
      time: dayjs().format("llll"),
    };

    if (isEdit) {
      data.edited = true;
      putDataApi("/api/chatApp/message", infoViewActionsContext, {
        channelId: selectedUser?.channelId,
        message: data,
      })
        .then((data) => {
          setData(data?.userMessages);
          setConnectionData(data?.connectionData);
          infoViewActionsContext.showMessage("Message Edited Successfully!");
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });

      setMessage("");
      setIsEdit(false);
      setSelectedMessage(null);
    } else {
      postDataApi("/api/chatApp/message", infoViewActionsContext, {
        channelId: selectedUser?.channelId,
        message: data,
      })
        .then((data) => {
          setData(data?.userMessages);
          setConnectionData(data?.connectionData);
          infoViewActionsContext.showMessage("Message Added Successfully!");
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
      setMessage("");
    }
  };

  const onChangeStarred = (checked) => {
    setIsChecked(checked);
  };

  const onClickEditMessage = (data) => {
    if (data.message_type === MessageType.TEXT) {
      setIsEdit(true);
      setMessage(data.message);
      setSelectedMessage(data);
    }
  };

  const deleteMessage = (messageId) => {
    postDataApi("/api/chatApp/delete/message", infoViewActionsContext, {
      channelId: selectedUser?.channelId,
      messageId,
    })
      .then((data) => {
        console.log("data d ", data);
        console.log("data duserMessages ", userMessages);
        setData({
          ...userMessages?.messageData,
          messageData: data?.userMessages,
        });
        setConnectionData(data?.connectionData);
        infoViewActionsContext.showMessage("Message Deleted Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const deleteConversation = () => {
    postDataApi("/api/chatApp/delete/user/messages", infoViewActionsContext, {
      channelId: selectedUser?.channelId,
    })
      .then((data) => {
        setSelectedUser(undefined);
        setConnectionData(data);
        infoViewActionsContext.showMessage("Chat Deleted Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const clearChatHistory = () => {
    postDataApi("/api/chatApp/clearChat", infoViewActionsContext, {
      channelId: selectedUser?.channelId,
    })
      .then((data) => {
        console.log("data", data);
        setData({ ...userMessages, messageData: data?.messageData });
        setConnectionData(data?.connectionData);
        infoViewActionsContext.showMessage("Chat Cleared Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <StyledMessageScreen>
      <AppsHeader>
        <Header
          isChecked={isChecked}
          onChangeStarred={onChangeStarred}
          selectedUser={selectedUser}
          deleteConversation={deleteConversation}
          clearChatHistory={clearChatHistory}
        />
      </AppsHeader>

      {userMessages && user ? (
        <StyledMsgScreenScrollbar ref={_scrollBarRef}>
          <MessagesList
            userMessages={userMessages}
            authUser={user}
            selectedUser={selectedUser}
            onClickEditMessage={onClickEditMessage}
            deleteMessage={deleteMessage}
          />
        </StyledMsgScreenScrollbar>
      ) : (
        <StyledScrollChatNoMain>
          <StyledNoMsg>
            <IntlMessages id="chatApp.sayHi" /> {selectedUser.name}
          </StyledNoMsg>
        </StyledScrollChatNoMain>
      )}

      <StyledMsgAppsFooter>
        <AddNewMessage
          currentMessage={message}
          sendFileMessage={sendFileMessage}
          onSendMessage={onSend}
        />
      </StyledMsgAppsFooter>
    </StyledMessageScreen>
  );
};

export default MessagesScreen;

MessagesScreen.defaultProps = {};

MessagesScreen.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  setSelectedUser: PropTypes.func,
};
