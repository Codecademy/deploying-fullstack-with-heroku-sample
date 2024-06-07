import React from 'react';
import { Input, Space } from 'antd';

const { TextArea } = Input;

class AutosizingTheHeight extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Space direction='vertical' style={{ width: '100%' }}>
        <TextArea
          placeholder='Autosize height based on content lines'
          autoSize
        />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          placeholder='Autosize height with minimum and maximum number of lines'
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder='Controlled autosize'
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Space>
    );
  }
}

export default AutosizingTheHeight;
