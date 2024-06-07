import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledAppSelect, StyledOption } from './index.styled';

const AppSelect = ({ menus, onChange, defaultValue, selectionKey }) => {
  const [selectionType, setSelectionType] = useState(defaultValue);

  const handleSelectionType = (value) => {
    setSelectionType(value);
    onChange(value);
  };

  return (
    <StyledAppSelect
      defaultValue={defaultValue}
      value={selectionType}
      onChange={handleSelectionType}
    >
      {menus.map((menu, index) => (
        <StyledOption
          key={index}
          value={selectionKey ? menu[selectionKey] : menu}
        >
          {selectionKey ? menu[selectionKey] : menu}
        </StyledOption>
      ))}
    </StyledAppSelect>
  );
};

export default AppSelect;
AppSelect.propTypes = {
  menus: PropTypes.array,
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
  selectionKey: PropTypes.any,
};
AppSelect.defaultProps = {
  menus: [],
  defaultValue: '',
  selectionKey: '',
};
