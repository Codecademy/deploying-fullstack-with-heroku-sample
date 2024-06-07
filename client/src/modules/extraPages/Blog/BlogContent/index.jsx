import React from 'react';
import BlogSidebarCard from '../BlogSidebarCard';
import Blogs from './Blogs';
import AppRowContainer from '@crema/components/AppRowContainer';
import PropTypes from 'prop-types';
import { StyledCol1, StyledCol2 } from './index.styled';

const BlogContent = ({ blogSidebar, blogContent }) => {
  return (
    <AppRowContainer>
      <StyledCol1 xs={24} md={8} lg={8} xl={6}>
        <BlogSidebarCard blogSidebar={blogSidebar} />
      </StyledCol1>
      <StyledCol2 xs={24} md={16} lg={16} xl={18}>
        <Blogs blogs={blogContent} />
      </StyledCol2>
    </AppRowContainer>
  );
};

export default BlogContent;
BlogContent.propTypes = {
  blogSidebar: PropTypes.object.isRequired,
  blogContent: PropTypes.array.isRequired,
};
