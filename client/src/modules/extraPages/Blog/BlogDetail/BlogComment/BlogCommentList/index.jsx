import React from 'react';
import BlogCommentItem from './BlogCommentItem';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledBlogCommentItemWrapper,
  StyledBlogCommentList,
  StyledTitle3,
} from '../index.styled';

const BlogCommentList = ({ comments }) => {
  return (
    <StyledBlogCommentList>
      <StyledTitle3>
        {comments.length} <IntlMessages id='common.comments' />
      </StyledTitle3>
      <StyledBlogCommentItemWrapper>
        {comments.map((comment, index) => (
          <div className='blog-comment-item' key={index}>
            <BlogCommentItem comment={comment} />
          </div>
        ))}
      </StyledBlogCommentItemWrapper>
    </StyledBlogCommentList>
  );
};

export default BlogCommentList;

BlogCommentList.propTypes = {
  comments: PropTypes.array,
};
