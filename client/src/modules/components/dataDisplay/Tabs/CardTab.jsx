import React from 'react';
import { Space, Tabs } from 'antd';

const CardTab = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Tabs
        onChange={callback}
        type='card'
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
    </Space>
  );
};
export default CardTab;
