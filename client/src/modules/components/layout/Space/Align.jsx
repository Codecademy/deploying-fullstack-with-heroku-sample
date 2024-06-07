import React from 'react';
import { Button, Space } from 'antd';
import {
  StyledMockBlock,
  StyledSpaceAlignBlock,
  StyledSpaceAlignContainer,
} from './Align.styled';

const Align = () => {
  return (
    <StyledSpaceAlignContainer
      style={{ display: 'inline-block', boxSizing: 'border-box', width: '300' }}
    >
      <StyledSpaceAlignBlock>
        <Space align='center'>
          center
          <Button type='primary'>Primary</Button>
          <StyledMockBlock>Block</StyledMockBlock>
        </Space>
      </StyledSpaceAlignBlock>
      <StyledSpaceAlignBlock>
        <Space align='start'>
          start
          <Button type='primary'>Primary</Button>
          <StyledMockBlock>Block</StyledMockBlock>
        </Space>
      </StyledSpaceAlignBlock>
      <StyledSpaceAlignBlock>
        <Space align='end'>
          end
          <Button type='primary'>Primary</Button>
          <StyledMockBlock>Block</StyledMockBlock>
        </Space>
      </StyledSpaceAlignBlock>
      <StyledSpaceAlignBlock>
        <Space align='baseline'>
          baseline
          <Button type='primary'>Primary</Button>
          <StyledMockBlock>Block</StyledMockBlock>
        </Space>
      </StyledSpaceAlignBlock>
    </StyledSpaceAlignContainer>
  );
};

export default Align;
