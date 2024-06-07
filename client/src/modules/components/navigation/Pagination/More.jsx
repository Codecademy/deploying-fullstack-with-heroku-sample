import React from 'react';
import { Pagination, Space } from 'antd';

const More = () => {
  return (
    <Space>
      <Pagination defaultCurrent={6} total={500} />
    </Space>
  );
};

export default More;
