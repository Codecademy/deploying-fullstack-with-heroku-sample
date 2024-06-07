import React from 'react';
import { Pagination, Space } from 'antd';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

const PrevAndNext = () => {
  return (
    <Space>
      <Pagination total={500} itemRender={itemRender} />
    </Space>
  );
};

export default PrevAndNext;
