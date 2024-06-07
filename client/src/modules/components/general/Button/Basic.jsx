import React from 'react';
import { Button, Space } from 'antd';

const Basic = () => {
  return (
    <Space wrap size='large'>
      <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <br />
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
    </Space>
  );
};

export default Basic;
