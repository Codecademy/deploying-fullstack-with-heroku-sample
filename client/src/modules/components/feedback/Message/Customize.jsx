import React from 'react';
import { Button, message, Space } from 'antd';

const success = () => {
  message.success(
    'This is a prompt message for success, and it will disappear in 10 seconds',
    10,
  );
};

const Customize = () => {
  return (
    <Space>
      <Button onClick={success}>Customized display duration</Button>
    </Space>
  );
};

export default Customize;
