import React from 'react';
import { Alert, Space, Spin } from 'antd';

const Customize = () => {
  return (
    <Space>
      <Spin tip='Loading...'>
        <Alert
          message='Alert message title'
          description='Further details about the context of this alert.'
          type='info'
        />
      </Spin>
    </Space>
  );
};
export default Customize;
