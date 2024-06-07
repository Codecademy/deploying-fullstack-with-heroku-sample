import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { Comment } from '@ant-design/compatible';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key='comment-nested-reply-to'>Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={<Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />}
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

ExampleComment.propTypes = {
  children: PropTypes.any,
};

const NestedComments = () => {
  return (
    <ExampleComment>
      <ExampleComment>
        <ExampleComment />
        <ExampleComment />
      </ExampleComment>
    </ExampleComment>
  );
};

export default NestedComments;
