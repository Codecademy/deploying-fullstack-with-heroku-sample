import React from 'react';
import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import {
  StyledColorBody,
  StyledColorBodyColor,
  StyledColorBodyWrapper,
  StyledColorCheckboxWrapper,
  StyledColorHeadingWrapper,
  StyledColorTitle,
  StyledColorWrapper,
} from './index.styled';

const CustomColorCell = ({
  themeColorSet,
  sidebarBGColor,
  updateThemeColors,
}) => {
  const { theme } = useThemeContext();
  return (
    <div
      onClick={() => {
        updateThemeColors(themeColorSet);
      }}
    >
      <StyledColorWrapper>
        <StyledColorHeadingWrapper
          style={{ backgroundColor: themeColorSet.primary.main }}
        >
          Primary
          {theme.palette.primary.main === themeColorSet.primary.main &&
          theme.palette.secondary.main === themeColorSet.secondary.main &&
          theme.palette.mode === themeColorSet.mode &&
          themeColorSet.color === sidebarBGColor ? (
            <StyledColorCheckboxWrapper>
              <CheckOutlined>
                <IntlMessages id='customizer.checked' />
              </CheckOutlined>
            </StyledColorCheckboxWrapper>
          ) : null}
        </StyledColorHeadingWrapper>
        <StyledColorBodyWrapper
          style={{
            backgroundColor: themeColorSet.background.default,
            color: themeColorSet.text.primary,
          }}
        >
          <StyledColorBody
            style={{
              backgroundColor: themeColorSet.background.paper,
              color: themeColorSet.text.primary,
            }}
          >
            Paper
            <StyledColorBodyColor
              style={{ backgroundColor: themeColorSet.secondary.main }}
            >
              <PlusOutlined />
            </StyledColorBodyColor>
          </StyledColorBody>
          Background
        </StyledColorBodyWrapper>
      </StyledColorWrapper>
      <StyledColorTitle>{themeColorSet.title}</StyledColorTitle>
    </div>
  );
};

export default CustomColorCell;

CustomColorCell.propTypes = {
  themeColorSet: PropTypes.object,
  sidebarBGColor: PropTypes.string,
  updateThemeColors: PropTypes.func,
};
