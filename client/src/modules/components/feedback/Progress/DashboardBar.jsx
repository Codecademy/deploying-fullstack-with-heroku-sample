import React from 'react';
import { Progress, Space } from 'antd';

const DashboardBar = () => {
  return (
    <Space>
      <Progress type='dashboard' percent={75} />
    </Space>
  );
};

export default DashboardBar;
