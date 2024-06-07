import React from 'react';
import PropTypes from 'prop-types';
import OrderActions from './OrderActions';
import { StyledOrderId, StyledOrderTable } from '../index.styled';

const getPaymentStatusColor = (status) => {
  switch (status) {
    case 'Pending': {
      return '#E2A72E';
    }
    case 'Delivered': {
      return '#43C888';
    }
    default: {
      return '#F84E4E';
    }
  }
};
const columns = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    key: 'id',
    render: (id) => <StyledOrderId>{id}</StyledOrderId>,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Delivery Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentType',
    key: 'paymentType',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <span
        className='badge'
        style={{
          color: getPaymentStatusColor(status),
          backgroundColor: getPaymentStatusColor(status) + '44',
        }}
      >
        {status}
      </span>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    className: 'order-table-action',
    fixed: 'right',
    render: () => <OrderActions />,
  },
];
const OrderTable = ({ orderData, loading }) => {
  return (
    <StyledOrderTable
      hoverColor
      data={orderData}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto' }}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
  loading: PropTypes.bool,
};
