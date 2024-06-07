import React from 'react';
import { Button, message, Space, Upload } from 'antd';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadClick = () => {
  return (
    <Space>
      <Upload {...props}>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
    </Space>
  );
};
export default UploadClick;
