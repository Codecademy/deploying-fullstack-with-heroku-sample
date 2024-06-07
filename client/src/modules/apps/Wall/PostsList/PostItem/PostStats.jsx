import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  StyledCommentOutlined,
  StyledLikeOutlined,
  StyledPostStats,
  StyledPostStatsItem,
  StyledPostStatsItemInfo,
  StyledShareAltOutlined,
} from '../index.styled';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { putDataApi } from '@crema/hooks/APIHooks';

const PostStats = ({ post, setPostList }) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const toggleLikeStatus = () => {
    putDataApi('/wall/posts', infoViewActionsContext, {
      postId: post.id,
      status: !post.liked,
    })
      .then((data) => {
        setPostList(data);
        infoViewActionsContext.showMessage('Post Updated Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <StyledPostStats>
      <StyledPostStatsItem
        className={clsx({ active: post.liked })}
        onClick={toggleLikeStatus}
      >
        <StyledLikeOutlined />
        <StyledPostStatsItemInfo>{post.likes} likes</StyledPostStatsItemInfo>
      </StyledPostStatsItem>
      {post.comments.length > 0 && (
        <StyledPostStatsItem>
          <StyledCommentOutlined />
          <StyledPostStatsItemInfo>
            {post.comments.length} Comments
          </StyledPostStatsItemInfo>
        </StyledPostStatsItem>
      )}
      <StyledPostStatsItem>
        <StyledShareAltOutlined />
        <StyledPostStatsItemInfo>{post.shares} Shares</StyledPostStatsItemInfo>
      </StyledPostStatsItem>
    </StyledPostStats>
  );
};

export default PostStats;

PostStats.propTypes = {
  post: PropTypes.object.isRequired,
  setPostList: PropTypes.func,
};
