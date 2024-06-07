import React from 'react';
import PropsTypes from 'prop-types';
import { StyledSlide4Wrapper } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledSlide4Wrapper>{children}</StyledSlide4Wrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
