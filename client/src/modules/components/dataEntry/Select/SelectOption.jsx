import React from 'react';
import { Select, Space } from 'antd';

const { Option, OptGroup } = Select;

const SelectOption = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Space>
      <Select
        defaultValue='lucy'
        style={{ width: 200 }}
        onChange={handleChange}
      >
        <OptGroup label='Manager'>
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
        </OptGroup>
        <OptGroup label='Engineer'>
          <Option value='Yiminghe'>yiminghe</Option>
        </OptGroup>
      </Select>
    </Space>
  );
};

export default SelectOption;
