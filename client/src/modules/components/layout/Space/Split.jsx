import { Divider, Space, Typography } from 'antd';
import React from 'react';

function SpaceSplit() {
  return (
    <Space split={<Divider type='vertical' />}>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
    </Space>
  );
}

const Split = () => {
  return <SpaceSplit />;
};

export default Split;
