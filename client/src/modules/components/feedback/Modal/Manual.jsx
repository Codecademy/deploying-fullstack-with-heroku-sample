import React from 'react';
import { Button, Modal, Space } from 'antd';

const Manual = () => {
  function success() {
    const modal = Modal.success({
      title: 'This is a Notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  }

  return (
    <Space>
      <Button onClick={success}>Success</Button>
    </Space>
  );
};

export default Manual;
