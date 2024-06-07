import React from 'react';
import {
  StyledNoBorderCard,
  StyledSiteCardBorderlessWrapper,
} from './noBorder.styled';

const NoBorder = () => {
  return (
    <StyledSiteCardBorderlessWrapper>
      <StyledNoBorderCard
        title='Card title'
        bordered={false}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </StyledNoBorderCard>
    </StyledSiteCardBorderlessWrapper>
  );
};

export default NoBorder;
