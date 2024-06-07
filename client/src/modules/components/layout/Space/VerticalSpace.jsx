import { Card, Space } from 'antd';
import React from 'react';

function SpaceVertical() {
  return (
    <Space direction='vertical'>
      <Card title='Card' style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title='Card' style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

const VerticalSpace = () => {
  return <SpaceVertical />;
};

export default VerticalSpace;
