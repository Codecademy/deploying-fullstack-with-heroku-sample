import React from 'react';
import PropTypes from 'prop-types';
import { StyledTimelineCircle } from '../index.styled';

const CircleWrapper = ({ children }) => {
  return <StyledTimelineCircle>{children}</StyledTimelineCircle>;
};

export default CircleWrapper;

CircleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
