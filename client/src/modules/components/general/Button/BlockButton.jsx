import React from 'react';
import { Button, Space } from 'antd';

const BlockButton = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Button type='primary' block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type='dashed' block>
        Dashed
      </Button>
      <Button type='link' block>
        Link
      </Button>
    </Space>
  );
};

export default BlockButton;
