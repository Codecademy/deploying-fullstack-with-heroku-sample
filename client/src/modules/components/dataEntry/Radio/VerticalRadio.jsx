import React from 'react';
import { Input, Radio, Space } from 'antd';

class VerticalRadio extends React.Component {
  state = {
    value: 1,
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { value } = this.state;
    return (
      <Space>
        <Radio.Group onChange={this.onChange} value={value}>
          <Radio style={radioStyle} value={1}>
            Option A
          </Radio>
          <Radio style={radioStyle} value={2}>
            Option B
          </Radio>
          <Radio style={radioStyle} value={3}>
            Option C
          </Radio>
          <Radio style={radioStyle} value={4}>
            More...
            {value === 4 ? (
              <Input style={{ width: 100, marginLeft: 10 }} />
            ) : null}
          </Radio>
        </Radio.Group>
      </Space>
    );
  }
}

export default VerticalRadio;
