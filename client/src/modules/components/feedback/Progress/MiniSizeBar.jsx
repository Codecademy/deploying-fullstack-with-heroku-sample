import React from 'react';
import { Progress } from 'antd';

const MiniSizeBar = () => {
  return (
    <div style={{ minWidth: '40%' }}>
      <Progress percent={30} size='small' />
      <Progress percent={50} size='small' status='active' />
      <Progress percent={70} size='small' status='exception' />
      <Progress percent={100} size='small' />
    </div>
  );
};

export default MiniSizeBar;
