import React from 'react';
import { Button, notification, Space } from 'antd';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type='primary' size='small' onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description:
      'A function will be be called after the Notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};

const CustomClose = () => {
  return (
    <Space>
      <Button type='primary' onClick={openNotification}>
        Open the notification box
      </Button>
    </Space>
  );
};

export default CustomClose;
