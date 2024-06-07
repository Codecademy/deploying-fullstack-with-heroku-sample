import React from 'react';
import { Button, Radio, Space } from 'antd';

class Disabled extends React.Component {
  state = {
    disabled: true,
  };
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <Space wrap>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Button
          type='primary'
          onClick={this.toggleDisabled}
          style={{ marginTop: 16 }}
        >
          Toggle disabled
        </Button>
      </Space>
    );
  }
}

export default Disabled;
