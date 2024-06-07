import React from 'react';
import PropTypes from 'prop-types';
import { StyledTimelineItem } from '../index.styled';

const TimelineItemWrapper = ({ children }) => {
  return <StyledTimelineItem>{children}</StyledTimelineItem>;
};

export default TimelineItemWrapper;

TimelineItemWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
