import React from 'react';
import { Button, InputNumber, Space } from 'antd';

class Disabled extends React.Component {
  state = {
    disabled: true,
  };
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <Space>
        <InputNumber
          min={1}
          max={10}
          disabled={this.state.disabled}
          defaultValue={3}
        />
        <Button onClick={this.toggle} type='primary'>
          Toggle disabled
        </Button>
      </Space>
    );
  }
}

export default Disabled;
