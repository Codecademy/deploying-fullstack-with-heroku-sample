import React from 'react';
import { Button, Space, Tooltip } from 'antd';

const ArrowPoint = () => {
  return (
    <Space wrap>
      <Tooltip placement='topLeft' title='Prompt Text'>
        <Button>Align edge </Button>
      </Tooltip>
      <Tooltip placement='topLeft' title='Prompt Text' arrowPointAtCenter>
        <Button>Arrow points to center </Button>
      </Tooltip>
    </Space>
  );
};

export default ArrowPoint;
