import mock from '../MockConfig';
import connectionList from '../../fakedb/apps/chat/connectionList';
import chatList from '../../fakedb/apps/chat/chatList';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

let connectionData = connectionList;
let chatData = chatList;

mock.onGet('/api/chatApp/connections').reply(200, connectionData);

mock.onGet('/api/chatApp/connection/messages').reply((config) => {
  const { id } = config.params;
  const response = chatData.find((chat) => chat.channelId === parseInt(id));
  if (response) {
    return [200, response];
  }
  return [200, null];
});

mock.onPost('/api/chatApp/message').reply((request) => {
  const { channelId, message } = JSON.parse(request.data);
  const id = generateRandomUniqueNumber();
  const data = { ...message, id };
  let user = connectionData.find(
    (connection) => connection.channelId === channelId,
  );
  user = { ...user, lastMessage: data };
  connectionData = connectionData.map((item) =>
    item.channelId === user.channelId ? user : item,
  );
  let userMessages = chatData.find((chat) => chat.channelId === channelId);
  if (userMessages) {
    userMessages.messageData = userMessages.messageData.concat(data);
  } else {
    userMessages = {
      id: channelId,
      messageData: [data],
    };
    chatData = chatData.concat(userMessages);
  }
  return [200, { connectionData, userMessages }];
});

mock.onPost('/api/chatApp/clearChat').reply((request) => {
  const { channelId } = JSON.parse(request.data);
  let user = connectionData.find(
    (connection) => connection.channelId === channelId,
  );
  user = { ...user, lastMessage: null };

  connectionData = connectionData.map((item) =>
    item.channelId === user.channelId ? user : item,
  );

  return [200, { connectionData, messageData: [] }];
});

mock.onPut('/api/chatApp/message').reply((request) => {
  const { channelId, message } = JSON.parse(request.data);
  let user = connectionData.find(
    (connection) => connection.channelId === channelId,
  );
  if (user.lastMessage.id === message.id) {
    user = { ...user, lastMessage: message };
    connectionData = connectionData.map((item) =>
      item.channelId === user.channelId ? user : item,
    );
  }
  let userMessages = chatData.find((chat) => chat.channelId === channelId);

  userMessages.messageData = userMessages.messageData.map((item) =>
    item.id === message.id ? message : item,
  );
  return [200, { connectionData, userMessages }];
});

mock.onPost('/api/chatApp/delete/message').reply((request) => {
  const { channelId, messageId } = JSON.parse(request.data);
  let userMessages = chatData.find((chat) => chat.channelId === channelId);
  userMessages.messageData = userMessages.messageData.filter(
    (item) => item.id !== messageId,
  );
  let user = connectionData.find(
    (connection) => connection.channelId === channelId,
  );
  if (user.lastMessage.id === messageId) {
    user = {
      ...user,
      lastMessage:
        userMessages.messageData[userMessages.messageData.length - 1],
    };
    connectionData = connectionData.map((item) =>
      item.id === user.id ? user : item,
    );
  }
  return [200, { connectionData, userMessages }];
});

mock.onPost('/api/chatApp/delete/user/messages').reply((request) => {
  const { channelId } = JSON.parse(request.data);
  chatData = chatData.filter((chat) => chat.channelId !== channelId);
  let user = connectionData.find(
    (connection) => connection.channelId === channelId,
  );
  delete user.lastMessage;
  connectionData = connectionData.map((item) =>
    item.id === user.id ? user : item,
  );
  return [200, connectionData];
});
