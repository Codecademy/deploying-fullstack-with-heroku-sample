import React, { useState } from 'react';
import { Alert, Calendar, Space } from 'antd';
import dayjs from 'dayjs';

const SelectableCalendar = () => {
  const [value, setValue] = useState(dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(dayjs('2017-01-25'));

  const onSelect = (value) => {
    setValue(value);
    setSelectedValue(value);
  };
  const onPanelChange = (value) => {
    setValue(value);
  };

  return (
    <Space direction='vertical'>
      <Alert
        message={`You selected date: ${
          selectedValue && selectedValue.format('MMM DD,YYYY')
        }`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </Space>
  );
};

export default SelectableCalendar;
