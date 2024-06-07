import React from 'react';
import { Button, Popconfirm } from 'antd';

const AsynchronouslyCloseOnPromise = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(), 3000);
    });

  return (
    <Popconfirm
      title='Title'
      onConfirm={confirm}
      onOpenChange={() => console.log('visible change')}
    >
      <Button type='primary'>Open Popconfirm with Promise</Button>
    </Popconfirm>
  );
};
export default AsynchronouslyCloseOnPromise;
