import React, { useState } from 'react';
import { TimePicker } from 'antd';
import PropTypes from 'prop-types';

const UnderControl = () => {
  const [value, setValue] = useState(null);

  const onChange = (time) => {
    setValue(time);
  };

  return <TimePicker value={value} onChange={onChange} />;
};

export default UnderControl;
UnderControl.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.any,
};
