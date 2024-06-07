import React from 'react';
import PropTypes from 'prop-types';
import AppMenu from '@crema/components/AppMenu';
import {
  StyledOrderBadge,
  StyledOrderId,
  StyledOrderTransactionTable,
} from '../index.styled';

const columns = [
  {
    title: 'OrderID',
    dataIndex: 'id',
    key: 'id',
    render: (id) => <StyledOrderId>{id}</StyledOrderId>,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Order Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Payment',
    dataIndex: 'paymentType',
    key: 'paymentType',
    render: (paymentType) => (
      <span
        style={{
          color: getPaymentTypeColor(paymentType),
        }}
      >
        {paymentType}
      </span>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <StyledOrderBadge
        style={{
          color: getPaymentStatusColor(status),
          backgroundColor: getPaymentStatusColor(status) + '44',
        }}
      >
        {status}
      </StyledOrderBadge>
    ),
  },
  {
    title: '',
    dataIndex: 'more',
    key: 'more',
    className: 'order-transaction-table-more',
    render: () => <AppMenu />,
  },
];
const getPaymentTypeColor = (paymentType) => {
  switch (paymentType) {
    case 'COD': {
      return '#F84E4E';
    }
    case 'Prepaid': {
      return '#43C888';
    }
    default: {
      return '#E2A72E';
    }
  }
};
const getPaymentStatusColor = (status) => {
  switch (status) {
    case 'In Transit': {
      return '#F84E4E';
    }
    case 'Delivered': {
      return '#43C888';
    }
    default: {
      return '#E2A72E';
    }
  }
};

const TransactionTable = ({ transactionData }) => {
  return (
    <StyledOrderTransactionTable
      hoverColor
      data={transactionData}
      columns={columns}
    />
  );
};

export default TransactionTable;

TransactionTable.defaultProps = {
  transactionData: [],
};

TransactionTable.propTypes = {
  transactionData: PropTypes.array,
};
