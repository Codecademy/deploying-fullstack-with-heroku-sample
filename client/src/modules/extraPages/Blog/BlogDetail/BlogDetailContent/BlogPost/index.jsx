import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAvatar,
  StyledBlogPostWrapper,
  StyledBox,
  StyledButton,
  StyledFlexWrapper,
  StyledTitle6,
} from './index.styled';

const BlogPost = ({ post }) => {
  return (
    <StyledBlogPostWrapper>
      <StyledFlexWrapper>
        <StyledBox>
          <StyledAvatar src={post.user} />
        </StyledBox>
        <StyledTitle6>{post.userName}</StyledTitle6>
        <div className='fs-12 text-secondary'>{post.userPosition}</div>
      </StyledFlexWrapper>
      <div className='text-secondary'>
        <p className='text'>{post.description}</p>
        <StyledButton>All author posts</StyledButton>
      </div>
    </StyledBlogPostWrapper>
  );
};

export default BlogPost;

BlogPost.propTypes = {
  post: PropTypes.object,
};
