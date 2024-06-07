import React from 'react';
import { Radio, Space } from 'antd';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

class OptionalRadio extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
    value4: 'Apple',
  };

  onChange1 = (e) => {
    this.setState({
      value1: e.target.value,
    });
  };

  onChange2 = (e) => {
    this.setState({
      value2: e.target.value,
    });
  };

  onChange3 = (e) => {
    this.setState({
      value3: e.target.value,
    });
  };

  onChange4 = (e) => {
    this.setState({
      value4: e.target.value,
    });
  };

  render() {
    const { value1, value2, value3, value4 } = this.state;
    return (
      <Space direction='vertical'>
        <Radio.Group
          options={plainOptions}
          onChange={this.onChange1}
          value={value1}
        />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange2}
          value={value2}
        />
        <Radio.Group
          options={options}
          onChange={this.onChange3}
          value={value3}
          optionType='button'
        />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange4}
          value={value4}
          optionType='button'
          buttonStyle='solid'
        />
      </Space>
    );
  }
}

export default OptionalRadio;
