import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import { StyledCategoryItem } from './index.styled';

const CategoryItem = (props) => {
  const { item, handleChange } = props;
  return (
    <StyledCategoryItem key={item.id} className='item-hover'>
      <Checkbox
        color='primary'
        checked={item.isChecked}
        onChange={(e) => handleChange(e, item)}
      />
      <span style={{ color: `${!item.isChecked ? 'text.secondary' : ''}` }}>
        {item.name}
      </span>
    </StyledCategoryItem>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
