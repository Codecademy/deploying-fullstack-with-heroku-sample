import React from 'react';
import PropTypes from 'prop-types';
import { StyledTaskListItem } from './index.styled';

const TaskItem = (props) => {
  const { item } = props;

  return (
    <StyledTaskListItem key={item.id} className='item-hover'>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </StyledTaskListItem>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  item: PropTypes.object.isRequired,
};
