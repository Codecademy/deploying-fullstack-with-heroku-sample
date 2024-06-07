import React from 'react';
import { Button, message, Space } from 'antd';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

const Loading = () => {
  return (
    <Space>
      <Button onClick={success}>Display a loading indicator</Button>
    </Space>
  );
};

export default Loading;
