import React from 'react';
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);

const style = { width: 200 };

class ConfigProviderDemo extends React.Component {
  state = {
    customize: false,
  };

  render() {
    const { customize } = this.state;
    return (
      <div>
        <Switch
          unCheckedChildren='default'
          checkedChildren='customize'
          checked={customize}
          onChange={(val) => {
            this.setState({ customize: val });
          }}
        />

        <Divider />

        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className='config-provider'>
            <h4>Select</h4>
            <Select style={style} />

            <h4>TreeSelect</h4>
            <TreeSelect style={style} treeData={[]} />

            <h4>Cascader</h4>
            <Cascader style={style} options={[]} showSearch />

            <h4>Transfer</h4>
            <Transfer />

            <h4>Table</h4>
            <Table
              style={{ marginTop: 8 }}
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                },
              ]}
            />

            <h4>List</h4>
            <List />
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

export default ConfigProviderDemo;
