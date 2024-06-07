import React from 'react';
import { Space, Switch } from 'antd';

const SwitchLoading = () => {
  return (
    <Space>
      <Switch loading defaultChecked />
      <br />
      <Switch size='small' loading />
    </Space>
  );
};

export default SwitchLoading;
