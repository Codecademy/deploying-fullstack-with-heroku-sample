import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { StyledGainerLooserTable } from '../../GainerLooser/index.styled';

const columns = [
  {
    title: 'Transaction ID',
    dataIndex: 'transactionID',
    key: 'transactionID',
  },
  {
    title: 'Type',
    dataIndex: 'title',
    key: 'title',
    render: (name, record) => (
      <div style={{ display: 'flex' }}>
        <Avatar.Group maxCount={2}>
          {record.type.map((item, index) => (
            <Avatar
              style={{ border: '0 none !important', width: 30, height: 30 }}
              alt={item.title}
              key={index}
              src={item.icon}
            />
          ))}
        </Avatar.Group>
      </div>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'USD Amount',
    dataIndex: 'usdAmount',
    key: 'usdAmount',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const OrdersActivitiesTable = ({ ordersActivities }) => {
  return (
    <StyledGainerLooserTable
      scroll={{ y: 352 }}
      hoverColor
      data={ordersActivities}
      columns={columns}
    />
  );
};

export default OrdersActivitiesTable;

OrdersActivitiesTable.propTypes = {
  ordersActivities: PropTypes.array,
};
