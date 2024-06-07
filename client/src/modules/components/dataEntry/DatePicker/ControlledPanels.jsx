import React, { Component } from 'react';
import { DatePicker, Space } from 'antd';

class ControlledPanels extends Component {
  state = { mode: 'time' };

  handleOpenChange = (open) => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  };

  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  };

  render() {
    return (
      <Space>
        <DatePicker
          className='gx-w-100'
          mode={this.state.mode}
          showTime
          onOpenChange={this.handleOpenChange}
          onPanelChange={this.handlePanelChange}
        />
      </Space>
    );
  }
}

export default ControlledPanels;
