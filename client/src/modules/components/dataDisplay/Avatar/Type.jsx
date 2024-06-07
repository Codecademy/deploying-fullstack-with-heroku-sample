import React from 'react';
import { Avatar, Image, Space } from 'antd';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';

const Type = () => {
  return (
    <Space wrap>
      <Avatar icon={<UserOutlined />} />
      <Avatar>U</Avatar>
      <Avatar size={40}>USER</Avatar>
      <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
      <Avatar
        src={
          <Image src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
        }
      />
      <Avatar
        style={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        }}
      >
        U
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#87d068',
        }}
        icon={<UserOutlined />}
      />
    </Space>
  );
};

export default Type;
