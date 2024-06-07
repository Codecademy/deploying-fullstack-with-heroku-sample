import React from 'react';
import { Space, Spin } from 'antd';
import LoadingOutlined from '@ant-design/icons/lib/icons/LoadingOutlined';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} />;

const Custom = () => {
  return (
    <Space>
      <Spin indicator={antIcon} />
    </Space>
  );
};

export default Custom;
