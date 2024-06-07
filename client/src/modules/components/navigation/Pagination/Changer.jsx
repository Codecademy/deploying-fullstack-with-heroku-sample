import React from 'react';
import { Pagination, Space } from 'antd';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

const Changer = () => {
  return (
    <Space wrap>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
      <br />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
        disabled
      />
    </Space>
  );
};

export default Changer;
