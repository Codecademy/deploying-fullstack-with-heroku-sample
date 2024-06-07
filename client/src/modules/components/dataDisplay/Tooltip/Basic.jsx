import React from 'react';
import { Space, Tooltip } from 'antd';

const Basic = () => {
  return (
    <Space>
      <Tooltip title='prompt text'>
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>
    </Space>
  );
};

export default Basic;
