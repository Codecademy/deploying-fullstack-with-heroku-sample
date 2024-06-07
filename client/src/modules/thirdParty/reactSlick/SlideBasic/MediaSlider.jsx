import React from 'react';
import PropsTypes from 'prop-types';
import { StyledSlideMediaWrapper } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledSlideMediaWrapper>{children}</StyledSlideMediaWrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
