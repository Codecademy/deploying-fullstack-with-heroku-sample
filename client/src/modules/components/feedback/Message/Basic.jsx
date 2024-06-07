import React from 'react';
import { Button, message, Space } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

const Basic = () => {
  return (
    <Space>
      <Button type='primary' onClick={info}>
        Display normal message
      </Button>
    </Space>
  );
};

export default Basic;
