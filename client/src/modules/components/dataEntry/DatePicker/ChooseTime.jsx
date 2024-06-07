import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Formatted Selected Time: ', value, dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const ChooseTime = () => {
  return (
    <Space>
      <DatePicker showTime onChange={onChange} onOk={onOk} />
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format='MMM DD,YYYY HH:mm'
        onChange={onChange}
        onOk={onOk}
      />
    </Space>
  );
};

export default ChooseTime;
