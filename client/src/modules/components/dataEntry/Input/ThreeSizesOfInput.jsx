import React from 'react';
import { Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ThreeSizesOfInput = () => {
  return (
    <Space>
      <Input size='large' placeholder='large size' prefix={<UserOutlined />} />
      <br />
      <br />
      <Input placeholder='default size' prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size='small' placeholder='small size' prefix={<UserOutlined />} />
    </Space>
  );
};

export default ThreeSizesOfInput;
