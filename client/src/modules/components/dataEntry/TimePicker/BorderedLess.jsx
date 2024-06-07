import { TimePicker } from 'antd';
import React from 'react';

const { RangePicker } = TimePicker;

const BorderedLess = () => {
  return (
    <>
      <TimePicker bordered={false} />
      <RangePicker bordered={false} />
    </>
  );
};

export default BorderedLess;
