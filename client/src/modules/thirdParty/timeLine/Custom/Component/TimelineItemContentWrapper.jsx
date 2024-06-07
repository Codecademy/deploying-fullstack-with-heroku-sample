import React from 'react';
import PropTypes from 'prop-types';
import { StyledTimelineItemContent } from '../index.styled';

const TimelineItemContentWrapper = ({ children }) => {
  return (
    <StyledTimelineItemContent className='timelineItemContent'>
      {children}
    </StyledTimelineItemContent>
  );
};

export default TimelineItemContentWrapper;

TimelineItemContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
