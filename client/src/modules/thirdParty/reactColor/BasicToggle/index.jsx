import React from 'react';

import { CompactPicker } from 'react-color';

class BasicToggle extends React.Component {
  state = {
    pickerVisible: false,
  };

  render() {
    const handleColorChange = ({ hex }) => console.log(hex);
    const onTogglePicker = () =>
      this.setState({ pickerVisible: !this.state.pickerVisible });

    return (
      <div className='z-index-20'>
        <button onClick={onTogglePicker}>Toggle Picker</button>

        {this.state.pickerVisible && (
          <div style={{ position: 'absolute' }}>
            <CompactPicker color='#333' onChangeComplete={handleColorChange} />
          </div>
        )}
      </div>
    );
  }
}

export default BasicToggle;
