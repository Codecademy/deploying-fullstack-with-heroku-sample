import React from 'react';
import data from './data';
import TimelineItem from './Component/TimelineItem';
import { StyledTimelineContainer, StyledTimelineCustom } from './index.styled';

const Timeline = () => {
  return (
    data.length > 0 && (
      <StyledTimelineCustom>
        <StyledTimelineContainer>
          {data.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </StyledTimelineContainer>
      </StyledTimelineCustom>
    )
  );
};

export default Timeline;
