import React from 'react';
import { Breadcrumb, Space } from 'antd';

const Basic = () => {
  return (
    <Space>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href=''>Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href=''>Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </Space>
  );
};

export default Basic;
