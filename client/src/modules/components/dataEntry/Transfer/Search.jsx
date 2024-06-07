import React from 'react';
import { Space, Transfer } from 'antd';
import { StyledAntTransfer } from './index.styled';

class Search extends React.Component {
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
  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  };
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  };
  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  componentDidMount() {
    this.getMock();
  }

  render() {
    return (
      <StyledAntTransfer>
        <Space wrap>
          <Transfer
            dataSource={this.state.mockData}
            showSearch
            filterOption={this.filterOption}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            render={(item) => item.title}
          />
        </Space>
      </StyledAntTransfer>
    );
  }
}

export default Search;
