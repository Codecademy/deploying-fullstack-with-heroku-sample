import { Slider } from 'antd';
import React from 'react';

const formatter = (value) => `${value}%`;
const SliderCustomize = () => (
  <>
    <Slider
      tooltip={{
        formatter,
      }}
    />
    <Slider
      tooltip={{
        formatter: null,
      }}
    />
  </>
);
export default SliderCustomize;
