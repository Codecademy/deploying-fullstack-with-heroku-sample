import React from 'react';
import PropsTypes from 'prop-types';
import { StyledSlide3Wrapper } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledSlide3Wrapper>{children}</StyledSlide3Wrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
