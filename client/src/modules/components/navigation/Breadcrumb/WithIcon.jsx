import React from 'react';
import { Breadcrumb, Space } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const WithIcon = () => {
  return (
    <Space>
      <Breadcrumb>
        <Breadcrumb.Item href=''>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href=''>
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </Space>
  );
};

export default WithIcon;
