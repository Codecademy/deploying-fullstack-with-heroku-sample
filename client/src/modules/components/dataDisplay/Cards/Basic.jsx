import React from 'react';
import { Space } from 'antd';
import { StyledBasicCard } from './Basic.styled';

const Basic = () => {
  return (
    <Space direction='vertical'>
      <StyledBasicCard
        title='Default size card'
        extra={<a href='#'>More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </StyledBasicCard>
      <StyledBasicCard
        size='small'
        title='Small size card'
        extra={<a href='#'>More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </StyledBasicCard>
    </Space>
  );
};

export default Basic;
