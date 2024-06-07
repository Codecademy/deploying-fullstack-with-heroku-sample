import { Switch, Transfer } from 'antd';
import React from 'react';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);

class OneWay extends React.Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false,
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', direction, moveKeys, nextTargetKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys],
    });

    console.log('targetSelectedKeys: ', sourceSelectedKeys, targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log('target:', direction, e.target);
  };

  handleDisable = (disabled) => {
    this.setState({ disabled });
  };

  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <>
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={(item) => item.title}
          disabled={disabled}
          oneWay
          style={{ marginBottom: 16 }}
        />
        <Switch
          unCheckedChildren='disabled'
          checkedChildren='disabled'
          checked={disabled}
          onChange={this.handleDisable}
        />
      </>
    );
  }
}

export default OneWay;
