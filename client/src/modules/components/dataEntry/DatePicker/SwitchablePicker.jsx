import React, { useState } from 'react';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import PropTypes from 'prop-types';
// import CompleteExample from '../../navigation/PageHeader/CompleteExample';

const { Option } = Select;

function PickerWithType({ type, onChange }) {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

PickerWithType.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.any,
};

function SwitchablePicker() {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value='time'>Time</Option>
        <Option value='date'>Date</Option>
        <Option value='week'>Week</Option>
        <Option value='month'>Month</Option>
        <Option value='quarter'>Quarter</Option>
        <Option value='year'>Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
}

export default SwitchablePicker;
