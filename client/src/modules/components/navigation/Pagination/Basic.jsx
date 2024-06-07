import React from 'react';
import { Pagination, Space } from 'antd';

const Basic = () => {
  return (
    <Space>
      <Pagination defaultCurrent={1} total={50} />
    </Space>
  );
};

export default Basic;
