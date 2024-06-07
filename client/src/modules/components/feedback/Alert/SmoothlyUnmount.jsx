import React from 'react';
import { Alert, Space } from 'antd';

class SmoothlyUnmount extends React.Component {
  state = {
    visiable: true,
  };
  handleClose = () => {
    this.setState({ visiable: false });
  };

  render() {
    return (
      <Space direction='vertical' style={{ width: '100%' }}>
        {this.state.visiable ? (
          <Alert
            message='Alert Message Text'
            type='success'
            closable
            afterClose={this.handleClose}
          />
        ) : null}
        <p>placeholder text here</p>
      </Space>
    );
  }
}

export default SmoothlyUnmount;
