import React from 'react';
import { Divider, Space } from 'antd';

const Vertical = () => {
  return (
    <Space>
      Text
      <Divider type='vertical' />
      <a href='#'>Link</a>
      <Divider type='vertical' />
      <a href='#'>Link</a>
    </Space>
  );
};

export default Vertical;
