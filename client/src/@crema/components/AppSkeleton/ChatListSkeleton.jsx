import React from 'react';
import ContentLoader from 'react-content-loader';

export const ChatItemItem = (props) => (
  <ContentLoader viewBox='0 0 200 40' {...props}>
    <circle cx='20' cy='20' r='15' />
    <rect x='45' y='10' rx='1' ry='1' width='140' height='10' />
    <rect x='45' y='22' rx='1' ry='1' width='100' height='7' />
  </ContentLoader>
);
const ChatListSkeleton = () => {
  return (
    <React.Fragment>
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
      <ChatItemItem />
    </React.Fragment>
  );
};

export default ChatListSkeleton;
