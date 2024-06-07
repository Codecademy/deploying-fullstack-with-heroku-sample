import React from 'react';
import { Checkbox, Space } from 'antd';

const Disabled = () => {
  return (
    <Space>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </Space>
  );
};

export default Disabled;
