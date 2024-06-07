import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const SearchWithSort = () => {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder='Search to Select'
      optionFilterProp='children'
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value='1'>Not Identified</Option>
      <Option value='2'>Closed</Option>
      <Option value='3'>Communicated</Option>
      <Option value='4'>Identified</Option>
      <Option value='5'>Resolved</Option>
      <Option value='6'>Cancelled</Option>
    </Select>
  );
};

export default SearchWithSort;
