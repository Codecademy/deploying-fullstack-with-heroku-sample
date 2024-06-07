import { Progress } from 'antd';
import React from 'react';

const ProgressBarWithSteps = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Progress percent={50} steps={3} />
      <br />
      <Progress percent={30} steps={5} />
      <br />
      <Progress percent={100} steps={5} size='small' strokeColor='#52c41a' />
    </div>
  );
};

export default ProgressBarWithSteps;
