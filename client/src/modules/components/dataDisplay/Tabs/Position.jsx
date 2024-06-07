import React, { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';

const App = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div style={{ width: '100%' }}>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value='top'>top</Radio.Button>
          <Radio.Button value='bottom'>bottom</Radio.Button>
          <Radio.Button value='left'>left</Radio.Button>
          <Radio.Button value='right'>right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </div>
  );
};
export default App;
