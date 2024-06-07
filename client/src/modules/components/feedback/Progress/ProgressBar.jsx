import { Progress } from 'antd';

import React from 'react';

const ProgressBar = () => {
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

export default ProgressBar;
