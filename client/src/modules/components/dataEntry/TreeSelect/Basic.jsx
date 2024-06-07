import React from 'react';
import { Space, TreeSelect } from 'antd';

const TreeNode = TreeSelect.TreeNode;

class Basic extends React.Component {
  state = {
    value: undefined,
  };
  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Space style={{ width: '100%' }} direction='vertical'>
        <TreeSelect
          showSearch
          style={{ width: '100%' }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder='Please select'
          allowClear
          treeDefaultExpandAll
          onChange={this.onChange}
        >
          <TreeNode value='parent 1' title='parent 1'>
            <TreeNode value='parent 1-0' title='parent 1-0'>
              <TreeNode value='leaf1' title='leaf1' />
              <TreeNode value='leaf2' title='leaf2' />
            </TreeNode>
            <TreeNode value='parent 1-1' title='parent 1-1'>
              <TreeNode
                value='leaf3'
                title={<b style={{ color: '#08c' }}>leaf3</b>}
              />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </Space>
    );
  }
}

export default Basic;
