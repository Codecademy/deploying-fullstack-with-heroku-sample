import React from 'react';
import PostItem from './PostItem';
import { StyledPostList } from './index.styled';
import PropTypes from 'prop-types';

const PostsList = ({ wallData, postList, setPostList }) => {
  return (
    <StyledPostList
      data={postList}
      renderItem={(post, index) => (
        <PostItem
          key={index}
          post={post}
          wallData={wallData}
          setPostList={setPostList}
          isLast={postList.length - 1 === index}
        />
      )}
    />
  );
};

export default PostsList;

PostsList.propTypes = {
  wallData: PropTypes.object,
  postList: PropTypes.array,
  setPostList: PropTypes.func,
};
