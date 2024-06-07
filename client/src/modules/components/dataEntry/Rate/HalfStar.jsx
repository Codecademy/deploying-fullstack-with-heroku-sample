import React from 'react';
import { Rate, Space } from 'antd';

const HalfStar = () => {
  return (
    <Space>
      <Rate allowHalf defaultValue={2.5} />
    </Space>
  );
};

export default HalfStar;
