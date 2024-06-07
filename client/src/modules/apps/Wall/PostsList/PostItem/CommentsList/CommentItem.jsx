import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  StyledPostCommentItem,
  StyledPostCommentItemAction,
  StyledPostCommentItemContent,
  StyledPostCommentItemContentArea,
  StyledPostItemAvatar,
} from '../../index.styled';

const CommentItem = ({ item }) => {
  const { author, comment, liked } = item;
  const [isLiked, setIsLiked] = useState(liked);

  const toggleLikeStatus = () => {
    setIsLiked(!isLiked);
  };

  return (
    <StyledPostCommentItem>
      <StyledPostItemAvatar src={author.profilePic} />
      <StyledPostCommentItemContent>
        <StyledPostCommentItemContentArea>
          <p className='mb-0'>{comment}</p>
        </StyledPostCommentItemContentArea>
        <StyledPostCommentItemAction>
          <span
            className={clsx('pointer', { active: isLiked })}
            onClick={toggleLikeStatus}
          >
            Like
          </span>
          <span className='pointer'>Reply</span>
        </StyledPostCommentItemAction>
      </StyledPostCommentItemContent>
    </StyledPostCommentItem>
  );
};

export default CommentItem;

CommentItem.propTypes = {
  item: PropTypes.object.isRequired,
};
