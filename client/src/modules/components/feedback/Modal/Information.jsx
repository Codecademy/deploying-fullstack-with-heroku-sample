import React from 'react';
import { Button, Modal, Space } from 'antd';

const Information = () => {
  function info() {
    Modal.info({
      title: 'This is a Notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
        //
      },
    });
  }

  function success() {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }

  function error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }

  function warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }

  return (
    <Space wrap>
      <Button onClick={info}>Info</Button>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </Space>
  );
};
export default Information;
