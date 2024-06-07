import React from 'react';
import { Space, Transfer } from 'antd';
import { StyledAntTransfer } from './index.styled';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const targetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);

class Basic extends React.Component {
  state = {
    targetKeys,
    selectedKeys: [],
  };

  handleChange = (nextTargetKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
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

  render() {
    const state = this.state;
    return (
      <StyledAntTransfer>
        <Space wrap>
          <Transfer
            dataSource={mockData}
            titles={['Source', 'Target']}
            targetKeys={state.targetKeys}
            selectedKeys={state.selectedKeys}
            onChange={this.handleChange}
            onSelectChange={this.handleSelectChange}
            onScroll={this.handleScroll}
            render={(item) => item.title}
          />
        </Space>
      </StyledAntTransfer>
    );
  }
}

export default Basic;
