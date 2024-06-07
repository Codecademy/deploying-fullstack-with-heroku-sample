import React from 'react';
import { Space, Switch } from 'antd';

const SwitchSize = () => {
  return (
    <Space>
      <Switch defaultChecked />
      <br />
      <Switch size='small' defaultChecked />
    </Space>
  );
};

export default SwitchSize;
