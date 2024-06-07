import React, { useState } from 'react';
import { Button, Popover, Space } from 'antd';

const Control = () => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };
  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  return (
    <Space>
      <Popover
        content={<a onClick={hide}>Close</a>}
        title='Title'
        trigger='click'
        open={visible}
        onOpenChange={handleVisibleChange}
      >
        <Button type='primary'>Click me</Button>
      </Popover>
    </Space>
  );
};

export default Control;
