import { Button, Space } from 'antd';
import React from 'react';

const Demo = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

const Wrap = () => {
  return <Demo />;
};

export default Wrap;
