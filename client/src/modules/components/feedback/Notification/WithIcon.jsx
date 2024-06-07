import React from 'react';
import { Button, notification, Space } from 'antd';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
  });
};

const WithIcon = () => {
  return (
    <Space wrap>
      <Button onClick={() => openNotificationWithIcon('success')}>
        Success
      </Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>
        Warning
      </Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </Space>
  );
};

export default WithIcon;
