import React from 'react';
import PropTypes from 'prop-types';
import { StyledTimelineContainer } from './index.styled';

const TimelineContainer = ({ children }) => {
  return <StyledTimelineContainer>{children}</StyledTimelineContainer>;
};

export default TimelineContainer;

TimelineContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
