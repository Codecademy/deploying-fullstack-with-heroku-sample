import React from 'react';
import { Tabs } from 'antd';

const Centered = () => (
  <div style={{ width: '100%' }}>
    <Tabs
      defaultActiveKey='1'
      centered
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: `Content of Tab Pane ${id}`,
        };
      })}
    />
  </div>
);
export default Centered;
