import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDot,
  StyledFlexWrapper,
  StyledTitle4,
  StyledTitle5,
} from './index.styled';

const AudienceCell = ({ audience }) => {
  return (
    <StyledFlexWrapper className='item-hover'>
      <StyledDot
        style={{
          backgroundColor: audience.color,
        }}
      />
      <StyledTitle5>{audience.title}</StyledTitle5>
      <StyledTitle4>{audience.value}%</StyledTitle4>
    </StyledFlexWrapper>
  );
};

export default AudienceCell;

AudienceCell.propTypes = {
  audience: PropTypes.object,
};
