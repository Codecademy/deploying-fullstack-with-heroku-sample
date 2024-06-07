import { Badge, Divider } from 'antd';
import React from 'react';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

const ColorfulBadge = () => {
  return (
    <>
      <Divider orientation='left'>Presets</Divider>
      <div>
        {colors.map((color) => (
          <div key={color}>
            <Badge color={color} text={color} />
          </div>
        ))}
      </div>
      <Divider orientation='left'>Custom</Divider>
      <>
        <Badge color='#f50' text='#f50' />
        <br />
        <Badge color='#2db7f5' text='#2db7f5' />
        <br />
        <Badge color='#87d068' text='#87d068' />
        <br />
        <Badge color='#108ee9' text='#108ee9' />
      </>
    </>
  );
};

export default ColorfulBadge;
