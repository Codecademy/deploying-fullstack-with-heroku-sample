import React from 'react';
import { Checkbox, Space } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const Basic = () => {
  return (
    <Space>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </Space>
  );
};

export default Basic;
