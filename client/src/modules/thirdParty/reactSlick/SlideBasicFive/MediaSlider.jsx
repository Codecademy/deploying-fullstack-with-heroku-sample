import React from 'react';
import PropsTypes from 'prop-types';
import { StyledSlideBasic5Wrapper } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledSlideBasic5Wrapper>{children}</StyledSlideBasic5Wrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
