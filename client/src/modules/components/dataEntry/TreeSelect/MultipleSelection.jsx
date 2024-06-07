import React from 'react';
import { Space, TreeSelect } from 'antd';

const TreeNode = TreeSelect.TreeNode;

class MultipleSelection extends React.Component {
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
          multiple
          treeDefaultExpandAll
          onChange={this.onChange}
        >
          <TreeNode value='parent 1' title='parent 1' key='parent 1'>
            <TreeNode value='parent 1-0' title='parent 1-0' key='parent 1-0'>
              <TreeNode value='leaf1' title='my leaf' key='leaf1' />
              <TreeNode value='leaf2' title='your leaf' key='leaf2' />
            </TreeNode>
            <TreeNode value='parent 1-1' title='parent 1-1' key='parent 1-1'>
              <TreeNode
                value='sss'
                title={<b style={{ color: '#08c' }}>sss</b>}
                key='sss'
              />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </Space>
    );
  }
}

export default MultipleSelection;
