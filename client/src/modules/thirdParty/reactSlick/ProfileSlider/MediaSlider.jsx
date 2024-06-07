import React from 'react';
import PropsTypes from 'prop-types';
import { StyledMediaSliderWrapper } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledMediaSliderWrapper>{children}</StyledMediaSliderWrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
