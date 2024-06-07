import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  StyledTodoAvatar36,
  StyledTodoCommentItem,
  StyledTodoCommentMsg,
  StyledTodoCommentMsgView,
  StyledTodoCommentTime,
  StyledTodoCommentUser,
  StyledTodoCommentView,
} from '../../index.styled';

const CommentsListItem = ({ item, isPreviousSender, isLast }) => {
  return (
    <StyledTodoCommentItem
      className={clsx(
        isPreviousSender ? 'hideUserInfo' : 'first-chat-message',
        isLast ? 'last-chat-message' : '',
      )}
    >
      <StyledTodoCommentView>
        <StyledTodoCommentUser className='todo-comment-user'>
          {item.image ? (
            <StyledTodoAvatar36 src={item.image} />
          ) : (
            <StyledTodoAvatar36 className='todo-avatar-name'>
              {item.name[0]}
            </StyledTodoAvatar36>
          )}
          <span className='todo-name'>{item.name}</span>
        </StyledTodoCommentUser>
        <StyledTodoCommentMsgView>
          <StyledTodoCommentTime className='todo-comment-time'>
            {item.date}
          </StyledTodoCommentTime>
          <StyledTodoCommentMsg>
            <p>{item.comment}</p>
          </StyledTodoCommentMsg>
        </StyledTodoCommentMsgView>
      </StyledTodoCommentView>
    </StyledTodoCommentItem>
  );
};

export default CommentsListItem;

CommentsListItem.propTypes = {
  item: PropTypes.object,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
};
