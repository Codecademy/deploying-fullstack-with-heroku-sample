import { Slider, Switch } from 'antd';
import React from 'react';

class Reverse extends React.Component {
  state = {
    reverse: true,
  };

  handleReverseChange = (reverse) => {
    this.setState({ reverse });
  };

  render() {
    const { reverse } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <Slider defaultValue={30} reverse={reverse} />
        <Slider range defaultValue={[20, 50]} reverse={reverse} />
        Reversed:{' '}
        <Switch
          size='small'
          checked={reverse}
          onChange={this.handleReverseChange}
        />
      </div>
    );
  }
}

export default Reverse;
