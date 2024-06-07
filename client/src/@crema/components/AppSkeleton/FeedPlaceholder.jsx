import React from 'react';
import ContentLoader from 'react-content-loader';

const PostItem = (props) => (
  <ContentLoader viewBox='0 0 400 240' {...props}>
    <circle cx='31' cy='31' r='15' />
    <rect x='58' y='18' rx='1' ry='1' width='280' height='9' />
    <rect x='58' y='34' rx='1' ry='1' width='100' height='7' />
    <rect x='10' y='55' rx='1' ry='1' width='400' height='150' />
    <rect x='10' y='210' rx='1' ry='1' width='400' height='8' />
    <rect x='10' y='225' rx='1' ry='1' width='400' height='8' />
  </ContentLoader>
);
const FeedPlaceholder = () => {
  return (
    <React.Fragment>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </React.Fragment>
  );
};

export default FeedPlaceholder;
