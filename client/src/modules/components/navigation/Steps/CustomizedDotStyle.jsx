import React from 'react';
import { Popover, Space, Steps } from 'antd';

const description = 'You can hover on the dot.';

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const CustomizedDotStyle = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Steps
        current={1}
        progressDot={customDot}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </Space>
  );
};

export default CustomizedDotStyle;
