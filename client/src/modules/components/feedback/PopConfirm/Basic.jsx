import React from 'react';
import { message, Popconfirm, Space } from 'antd';

const Basic = () => {
  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  return (
    <Space>
      <Popconfirm
        title='Are you sure delete this task?'
        onConfirm={confirm}
        onCancel={cancel}
        okText='Yes'
        cancelText='No'
      >
        <a href='#'>Delete</a>
      </Popconfirm>
    </Space>
  );
};

export default Basic;
