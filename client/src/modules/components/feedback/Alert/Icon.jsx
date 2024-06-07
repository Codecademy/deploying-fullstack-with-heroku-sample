import React from 'react';
import { Alert, Space } from 'antd';

const Icon = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Alert message='Success Tips' type='success' showIcon />
      <Alert message='Informational Notes' type='info' showIcon />
      <Alert message='Warning' type='warning' showIcon />
      <Alert message='Error' type='error' showIcon />
      <Alert
        message='Success Tips'
        description='Detailed description and advices about successful copywriting.'
        type='success'
        showIcon
      />
      <Alert
        message='Informational Notes'
        description='Additional description and informations about copywriting.'
        type='info'
        showIcon
      />
      <Alert
        message='Warning'
        description='This is a warning notice about copywriting.'
        type='warning'
        showIcon
      />
      <Alert
        message='Error'
        description='This is an error message about copywriting.'
        type='error'
        showIcon
      />
    </Space>
  );
};

export default Icon;
