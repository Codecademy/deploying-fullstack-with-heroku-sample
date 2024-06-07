import React from 'react';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const Basic = () => {
  return (
    <Space direction='vertical'>
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker='week' />
      <DatePicker onChange={onChange} picker='month' />
      <DatePicker onChange={onChange} picker='quarter' />
      <DatePicker onChange={onChange} picker='year' />
    </Space>
  );
};

export default Basic;
