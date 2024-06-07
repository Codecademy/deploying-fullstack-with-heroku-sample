import React from 'react';
import { Breadcrumb, Space } from 'antd';

const ConfiguringSeparator = () => {
  return (
    <Space>
      <Breadcrumb separator='>'>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href=''>Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href=''>Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </Space>
  );
};
export default ConfiguringSeparator;
