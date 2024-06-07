import React from 'react';
import { CustomPicker } from 'react-color';
import { Alpha } from 'react-color/lib/components/common';
import MyPointer from './MyPointer';
import PropTypes from 'prop-types';

export const MyPicker = ({ rgb, hsl, onChange }) => {
  return (
    <div style={{ height: 40, width: '80%', position: 'relative' }}>
      <Alpha rgb={rgb} hsl={hsl} onChange={onChange} pointer={MyPointer} />
    </div>
  );
};

export default CustomPicker(MyPicker);

MyPicker.propTypes = {
  rgb: PropTypes.any,
  hsl: PropTypes.any,
  onChange: PropTypes.func,
};
