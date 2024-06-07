import React from 'react';
import { Button } from 'antd';
import { StyledSiteButtonGhostWrapper } from './index.styled';

const GhostButton = () => {
  return (
    <StyledSiteButtonGhostWrapper>
      <Button type='primary' ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type='dashed' ghost>
        Dashed
      </Button>
    </StyledSiteButtonGhostWrapper>
  );
};

export default GhostButton;
