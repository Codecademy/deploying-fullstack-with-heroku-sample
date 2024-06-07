import React from 'react';
import PropsTypes from 'prop-types';
import { StyledMediaSlider } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledMediaSlider>{children}</StyledMediaSlider>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
