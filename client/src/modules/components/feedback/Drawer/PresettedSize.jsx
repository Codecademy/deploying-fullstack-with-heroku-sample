import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';

const PresettedSize = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize('default');
    setVisible(true);
  };

  const showLargeDrawer = () => {
    setSize('large');
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <Button type='primary' onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button>
        <Button type='primary' onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement='right'
        size={size}
        onClose={onClose}
        open={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type='primary' onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default PresettedSize;
