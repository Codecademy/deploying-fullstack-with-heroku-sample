import React from 'react';
import PropTypes from 'prop-types';

import { StyledListItem } from './index.styled';
import { Typography } from 'antd';

const Categories = (props) => {
  const { category } = props;

  return (
    <StyledListItem>
      <div className='earning-wrapper'>
        <div style={{ backgroundColor: category.color }} className='dot-icon' />
        <div className='earning-text'>{`${category.name}:`}</div>
      </div>
      <Typography.Text strong>{category.value}% </Typography.Text>
    </StyledListItem>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};
