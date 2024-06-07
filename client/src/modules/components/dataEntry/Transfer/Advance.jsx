import React from 'react';
import { Button, Transfer } from 'antd';
import { StyledAdvancedTransfer } from './index.styled';

class Advance extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  };
  renderFooter = () => {
    return (
      <Button
        size='small'
        style={{ float: 'right', margin: 5 }}
        onClick={this.getMock}
      >
        reload
      </Button>
    );
  };

  componentDidMount() {
    this.getMock();
  }

  render() {
    return (
      <StyledAdvancedTransfer wrap>
        <Transfer
          dataSource={this.state.mockData}
          showSearch
          listStyle={{
            width: 250,
            height: 300,
          }}
          operations={['to right', 'to left']}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          render={(item) => `${item.title}-${item.description}`}
          footer={this.renderFooter}
        />
      </StyledAdvancedTransfer>
    );
  }
}

export default Advance;
