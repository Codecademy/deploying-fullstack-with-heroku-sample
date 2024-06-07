import { Checkbox, InputNumber, Space } from 'antd';
import React from 'react';

const Keyboard = () => {
  const [keyboard, setKeyboard] = React.useState(true);
  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  );
};
export default Keyboard;
