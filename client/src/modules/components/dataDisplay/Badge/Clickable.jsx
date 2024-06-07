import React from 'react';
import { Badge, Space } from 'antd';
import { StyledHeadExample } from './index.styled';

const Clickable = () => {
  return (
    <Space>
      <a href='#'>
        <Badge count={5}>
          <StyledHeadExample />
        </Badge>
      </a>
    </Space>
  );
};

export default Clickable;
