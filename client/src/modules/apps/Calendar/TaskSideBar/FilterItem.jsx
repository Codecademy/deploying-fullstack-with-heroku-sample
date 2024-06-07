import React from 'react';
import PropTypes from 'prop-types';
import { StyledFlex, StyledTodoLabelItem } from './index.styled';
import { Checkbox } from 'antd';

const FilterItem = ({ item, checked, onChange }) => {
  return (
    <StyledTodoLabelItem>
      <StyledFlex className='filter-item'>
        <Checkbox
          onChange={(e) => onChange(e.target.checked, item.id)}
          checked={checked.find((data) => data === item.id)}
        />
        {item.name}
      </StyledFlex>
    </StyledTodoLabelItem>
  );
};

export default FilterItem;

FilterItem.propTypes = {
  item: PropTypes.object.isRequired,
  checked: PropTypes.array,
  onChange: PropTypes.func,
};
