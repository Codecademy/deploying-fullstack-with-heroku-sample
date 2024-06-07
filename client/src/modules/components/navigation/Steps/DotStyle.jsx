import React from 'react';
import { Divider, Space, Steps } from 'antd';

const items = [
  {
    title: 'Finished',
    description: 'This is a description.',
  },
  {
    title: 'In Progress',
    description: 'This is a description.',
  },
  {
    title: 'Waiting',
    description: 'This is a description.',
  },
];

const DotStyle = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Steps progressDot current={1} items={items} />
      <Divider />
      <Steps
        progressDot
        current={1}
        direction='vertical'
        items={[
          {
            title: 'Finished',
            description: 'This is a description. This is a description.',
          },
          {
            title: 'Finished',
            description: 'This is a description. This is a description.',
          },
          {
            title: 'In Progress',
            description: 'This is a description. This is a description.',
          },
          {
            title: 'Waiting',
            description: 'This is a description.',
          },
          {
            title: 'Waiting',
            description: 'This is a description.',
          },
        ]}
      />
    </Space>
  );
};

export default DotStyle;
