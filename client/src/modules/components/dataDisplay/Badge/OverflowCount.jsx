import React from 'react';
import { Badge } from 'antd';
import { StyledAntBadgeGroup, StyledHeadExampleLink } from './index.styled';

const OverflowCount = () => {
  return (
    <StyledAntBadgeGroup>
      <Badge count={99}>
        <StyledHeadExampleLink href='#' />
      </Badge>
      <Badge count={100}>
        <StyledHeadExampleLink href='#' />
      </Badge>
      <Badge count={99} overflowCount={10}>
        <StyledHeadExampleLink href='#' />
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <StyledHeadExampleLink href='#' />
      </Badge>
    </StyledAntBadgeGroup>
  );
};

export default OverflowCount;
