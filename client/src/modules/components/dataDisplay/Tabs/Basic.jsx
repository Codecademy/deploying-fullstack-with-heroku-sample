import React from 'react';
import { Space, Tabs } from 'antd';

const Basic = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Tabs
        defaultActiveKey='1'
        onChange={callback}
        items={[
          {
            label: `Tab 1`,
            key: '1',
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Tab 3`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </Space>
  );
};

export default Basic;
