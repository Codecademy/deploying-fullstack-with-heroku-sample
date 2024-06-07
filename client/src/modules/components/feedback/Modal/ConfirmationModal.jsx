import React from 'react';
import { Button, Modal, Space } from 'antd';

const confirm = Modal.confirm;

const ConfirmationModal = () => {
  function showConfirm() {
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <Space>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showDeleteConfirm} type='dashed'>
        Delete
      </Button>
    </Space>
  );
};
export default ConfirmationModal;
