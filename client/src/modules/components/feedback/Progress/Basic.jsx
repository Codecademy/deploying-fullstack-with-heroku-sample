import React from 'react';
import { Progress } from 'antd';

const Basic = () => {
  return (
    <div style={{ minWidth: '90%' }}>
      <Progress percent={30} />
      <Progress percent={50} status='active' />
      <Progress percent={70} status='exception' />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};

export default Basic;
