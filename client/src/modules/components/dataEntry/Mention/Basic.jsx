import { Mentions } from 'antd';
import React from 'react';

const { Option } = Mentions;
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const Basic = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue='@afc163'
  >
    <Option value='afc163'>afc163</Option>
    <Option value='zombieJ'>zombieJ</Option>
    <Option value='yesmeck'>yesmeck</Option>
  </Mentions>
);

export default Basic;
