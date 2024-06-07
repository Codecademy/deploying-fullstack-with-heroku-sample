import React from 'react';
import { Space, Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Size = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <div>
        <h4>Middle size table</h4>
        <Table columns={columns} dataSource={data} size='middle' />
        <h4>Small size table</h4>
        <Table columns={columns} dataSource={data} size='small' />
      </div>
    </Space>
  );
};

export default Size;
