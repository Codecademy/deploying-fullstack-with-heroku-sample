import React from 'react';
import PropTypes from 'prop-types';
import { CheckOutlined } from '@ant-design/icons';
import {
  StyledColorOptionListItem,
  StyledCustomColorOption,
  StyledCustomColorOptionRightIcon,
} from './index.styled';

const CustomColorCell = ({
  themeColorSet,
  sidebarBGColor,
  updateThemeColors,
}) => {
  return (
    <StyledColorOptionListItem
      onClick={() => {
        updateThemeColors(themeColorSet.color);
      }}
    >
      <StyledCustomColorOption style={{ backgroundColor: themeColorSet.color }}>
        {themeColorSet.color === sidebarBGColor ? (
          <StyledCustomColorOptionRightIcon>
            <CheckOutlined />
          </StyledCustomColorOptionRightIcon>
        ) : null}
      </StyledCustomColorOption>
    </StyledColorOptionListItem>
  );
};

export default CustomColorCell;

CustomColorCell.propTypes = {
  themeColorSet: PropTypes.object,
  sidebarBGColor: PropTypes.string,
  updateThemeColors: PropTypes.func,
};
