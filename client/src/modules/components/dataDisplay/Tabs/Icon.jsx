import React from 'react';

import { Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const Icon = () => {
  return (
    <div style={{ width: '100%' }}>
      <Tabs
        defaultActiveKey='2'
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
          const id = String(i + 1);
          return {
            label: (
              <span>
                <Icon />
                Tab {id}
              </span>
            ),
            key: id,
            children: `Tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default Icon;
