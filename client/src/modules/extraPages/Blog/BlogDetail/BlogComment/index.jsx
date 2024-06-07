import React, { useState } from 'react';
import BlogCommentForm from './BlogCommentForm';
import BlogCommentList from './BlogCommentList';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import { StyledTitle3 } from './index.styled';

const BlogComment = ({ comment }) => {
  const [comments, setComments] = useState(comment);

  return (
    <AppCard>
      <BlogCommentList comments={comments} />
      <div style={{ position: 'relative' }}>
        <StyledTitle3>
          <IntlMessages id='extraPages.writeComments' />
        </StyledTitle3>
        <BlogCommentForm comments={comments} setComments={setComments} />
      </div>
    </AppCard>
  );
};

export default BlogComment;

BlogComment.propTypes = {
  comment: PropTypes.array,
};
