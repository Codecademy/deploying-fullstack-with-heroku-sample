import React from 'react';
import { Space, Switch } from 'antd';

const Basic = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <Space>
      <Switch defaultChecked onChange={onChange} />
    </Space>
  );
};

export default Basic;
