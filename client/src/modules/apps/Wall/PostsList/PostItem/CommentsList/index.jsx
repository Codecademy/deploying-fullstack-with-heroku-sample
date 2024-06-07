import React from 'react';
import AppList from '@crema/components/AppList';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';
import {
  StyledPostCommentList,
  StyledPostCommentListTitle,
} from '../../index.styled';

const CommentsList = ({ comments }) => {
  return (
    <StyledPostCommentList>
      <StyledPostCommentListTitle>Comments</StyledPostCommentListTitle>
      <AppList
        data={comments}
        renderItem={(item, index) => <CommentItem key={index} item={item} />}
      />
    </StyledPostCommentList>
  );
};

export default CommentsList;

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};
