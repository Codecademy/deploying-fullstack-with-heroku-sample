import React from 'react';
import PropsTypes from 'prop-types';
import { StyledSlide2Wrapper } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledSlide2Wrapper>{children}</StyledSlide2Wrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
