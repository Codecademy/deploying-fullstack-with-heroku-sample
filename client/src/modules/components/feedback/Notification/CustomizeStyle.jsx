import React from 'react';
import { Button, notification, Space } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

const CustomizeStyle = () => {
  return (
    <Space>
      <Button type='primary' onClick={openNotification}>
        Open the notification box
      </Button>
    </Space>
  );
};

export default CustomizeStyle;
