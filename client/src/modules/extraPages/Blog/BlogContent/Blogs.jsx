import React from 'react';
import BlogCard from './BlogCard';
import PropTypes from 'prop-types';
import AppGrid from '@crema/components/AppGrid';
import { useNavigate } from 'react-router-dom';

const Blogs = ({ blogs }) => {
  const navigate = useNavigate();
  const onViewBlogDetail = (data, isEdit) => {
    if (isEdit) navigate(`/extra-pages/edit-blog/${data.id}`);
    else navigate(`/extra-pages/blog-details/${data.id}`);
  };

  return (
    <AppGrid
      responsive={{
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
      }}
      data={blogs}
      renderItem={(blog, index) => (
        <BlogCard key={index} blog={blog} onViewBlogDetail={onViewBlogDetail} />
      )}
    />
  );
};

export default Blogs;

Blogs.propTypes = {
  blogs: PropTypes.array,
};
