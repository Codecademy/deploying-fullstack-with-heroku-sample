import React from 'react';
import { Avatar, Space } from 'antd';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';

const Basic = () => {
  return (
    <Space direction='vertical'>
      <div>
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
        <Avatar
          size='large'
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
        <Avatar
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
        <Avatar
          size='small'
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
      </div>
      <div>
        <Avatar
          shape='square'
          size={64}
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
        <Avatar
          shape='square'
          size='large'
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
        <Avatar
          shape='square'
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
        <Avatar
          shape='square'
          size='small'
          icon={<UserOutlined />}
          style={{ marginTop: 16, marginRight: 16 }}
        />
      </div>
    </Space>
  );
};

export default Basic;
