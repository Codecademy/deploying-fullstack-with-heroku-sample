import React from 'react';
import ContentLoader from 'react-content-loader';

export const TodoItem = (props) => (
  <ContentLoader viewBox='0 0 400 25' {...props}>
    <rect height='10' rx='0' ry='0' width='10' x='10' y='10' />
    <rect height='10' rx='1' ry='0' width='100' x='30' y='10' />
    <rect height='10' rx='5' ry='5' width='30' x='145' y='10' />
    <rect height='10' rx='1' ry='0' width='150' x='215' y='10' />
    <rect height='10' rx='0' ry='0' width='10' x='370' y='10' />
    <circle cx='390' cy='15' r='5' />
  </ContentLoader>
);
const TodoListSkeleton = () => {
  return (
    <React.Fragment>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </React.Fragment>
  );
};

export default TodoListSkeleton;
