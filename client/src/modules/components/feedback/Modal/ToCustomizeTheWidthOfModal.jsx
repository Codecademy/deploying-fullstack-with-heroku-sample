import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ToCustomizeTheWidthOfModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type='primary' onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title='Modal 1000px width'
        centered
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default ToCustomizeTheWidthOfModal;
