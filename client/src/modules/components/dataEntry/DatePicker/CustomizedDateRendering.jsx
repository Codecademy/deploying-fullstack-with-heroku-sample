import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const CustomizedDateRendering = () => {
  return (
    <Space direction='vertical' size={12}>
      <DatePicker
        dateRender={(current) => {
          const style = {};
          if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
          }
          return (
            <div className='ant-picker-cell-inner' style={style}>
              {current.date()}
            </div>
          );
        }}
      />
      <RangePicker
        dateRender={(current) => {
          const style = {};
          if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
          }
          return (
            <div className='ant-picker-cell-inner' style={style}>
              {current.date()}
            </div>
          );
        }}
      />
    </Space>
  );
};

export default CustomizedDateRendering;
