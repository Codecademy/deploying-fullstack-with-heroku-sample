import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type='primary' onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title='Basic Drawer'
        placement='right'
        onClose={onClose}
        open={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Basic;
