import React from 'react';
import { Space, TimePicker } from 'antd';

class Basic extends React.Component {
  state = {
    value: null,
  };

  onChange = (time) => {
    console.log(time);
    this.setState({ value: time });
  };

  render() {
    return (
      <Space>
        <TimePicker value={this.state.value} onChange={this.onChange} />
      </Space>
    );
  }
}

export default Basic;
