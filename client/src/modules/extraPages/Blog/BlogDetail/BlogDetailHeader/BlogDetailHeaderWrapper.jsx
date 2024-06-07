import React from 'react';
import PropTypes from 'prop-types';
import { StyledBlogDetailHeaderWrapper } from '../index.styled';

const blogBgImage = '/assets/images/extra-pages/blog/blog-detail-header.png';

const BlogDetailHeaderWrapper = ({ children }) => {
  return (
    <StyledBlogDetailHeaderWrapper
      style={{
        backgroundImage: `url(${blogBgImage})`,
      }}
    >
      {children}
    </StyledBlogDetailHeaderWrapper>
  );
};

export default BlogDetailHeaderWrapper;

BlogDetailHeaderWrapper.propTypes = {
  children: PropTypes.node,
};
