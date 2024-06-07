import { Button, Popconfirm, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';

function SpaceDemo() {
  return (
    <Space>
      Space
      <Button type='primary'>Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm
        title='Are you sure delete this task?'
        okText='Yes'
        cancelText='No'
      >
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
  );
}

const BasicUsage = () => {
  return <SpaceDemo />;
};

export default BasicUsage;
