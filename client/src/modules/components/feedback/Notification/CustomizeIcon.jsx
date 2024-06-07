import React from 'react';
import { Button, notification, Space } from 'antd';
import Icon from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
    icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />,
  });
};

const CustomizeIcon = () => {
  return (
    <Space>
      <Button type='primary' onClick={openNotification}>
        Open the notification box
      </Button>
    </Space>
  );
};

export default CustomizeIcon;
