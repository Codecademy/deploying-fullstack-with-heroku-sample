import { Progress, Tooltip } from 'antd';

import React from 'react';

const ProgressBarWithSuccess = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Tooltip title='3 done / 3 in progress / 4 to do'>
        <Progress percent={60} success={{ percent: 30 }} />
      </Tooltip>

      <Tooltip title='3 done / 3 in progress / 4 to do'>
        <Progress percent={60} success={{ percent: 30 }} type='circle' />
      </Tooltip>

      <Tooltip title='3 done / 3 in progress / 4 to do'>
        <Progress percent={60} success={{ percent: 30 }} type='dashboard' />
      </Tooltip>
    </div>
  );
};

export default ProgressBarWithSuccess;
