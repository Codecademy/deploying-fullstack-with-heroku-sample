import React from 'react';
import { Pagination, Space } from 'antd';

const MiniSize = () => {
  function showTotal(total) {
    return `Total ${total} items`;
  }

  return (
    <Space direction='vertical'>
      <Pagination size='small' total={50} />
      <Pagination size='small' total={50} showSizeChanger showQuickJumper />
      <Pagination size='small' total={50} showTotal={showTotal} />
      <Pagination
        size='small'
        total={50}
        disabled
        showTotal={showTotal}
        showSizeChanger
        showQuickJumper
      />
    </Space>
  );
};

export default MiniSize;
