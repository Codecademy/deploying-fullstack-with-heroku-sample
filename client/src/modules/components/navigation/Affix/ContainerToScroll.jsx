import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import {
  StyledBackground,
  StyledScrollableContainer,
} from './ContainerToScroll.styled';

const ContainerToScroll = () => {
  const [container, setContainer] = useState(null);
  return (
    <StyledScrollableContainer ref={setContainer}>
      <StyledBackground className='background'>
        <Affix target={() => container}>
          <Button type='primary'>Fixed at the top of container</Button>
        </Affix>
      </StyledBackground>
    </StyledScrollableContainer>
  );
};

export default ContainerToScroll;
