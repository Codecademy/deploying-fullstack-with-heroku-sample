import React from 'react';
import PropsTypes from 'prop-types';
import { StyledMediaWrapper } from './index.styled';

const MediaSlider = ({ children }) => {
  return <StyledMediaWrapper>{children}</StyledMediaWrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
