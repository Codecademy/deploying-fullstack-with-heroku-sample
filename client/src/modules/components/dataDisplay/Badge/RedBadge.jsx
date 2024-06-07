import React from 'react';
import { Badge, Space } from 'antd';
import NotificationOutlined from '@ant-design/icons/lib/icons/NotificationOutlined';

const RedBadge = () => {
  return (
    <Space>
      <Badge dot>
        <NotificationOutlined />
      </Badge>
      <Badge count={0} dot>
        <NotificationOutlined />
      </Badge>
      <Badge dot>
        <a href='/'>Link something</a>
      </Badge>
    </Space>
  );
};

export default RedBadge;
