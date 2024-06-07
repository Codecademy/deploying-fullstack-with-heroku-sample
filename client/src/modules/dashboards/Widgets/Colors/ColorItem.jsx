import React from 'react';
import PropTypes from 'prop-types';
import { StyledColorCheckbox, StyledColorItem } from './index.styled';

const ColorItem = (props) => {
  const { item, handleChange } = props;

  return (
    <StyledColorItem key={item.id} className='item-hover'>
      <StyledColorCheckbox
        checked={item.isChecked}
        onChange={(e) => handleChange(e, item)}
      />
      <span style={{ color: item.color }}>{item.name}</span>
    </StyledColorItem>
  );
};

export default ColorItem;

ColorItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
};
