import React from 'react';
import PropTypes from 'prop-types';
import { StarFilled } from '@ant-design/icons';
import OrderActions from './OrderActions';
import { StyledCustomerTable } from '../index.styled';

const CustomerTable = ({ customers, loading }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Last Item',
      dataIndex: 'lastItem',
      key: 'lastItem',
    },
    {
      title: 'Last Order',
      dataIndex: 'lastOrder',
      key: 'lastOrder',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <span className='badge'>
          {rating} <StarFilled style={{ fontSize: 12, marginLeft: 2 }} />
        </span>
      ),
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      className: 'customer-table-actions',
      fixed: 'right',
      render: () => <OrderActions />,
    },
  ];
  return (
    <StyledCustomerTable
      hoverColor
      data={customers}
      columns={columns}
      loading={loading}
      scroll={{ x: 'auto' }}
    />
  );
};

export default CustomerTable;

CustomerTable.defaultProps = {
  customers: [],
};

CustomerTable.propTypes = {
  customers: PropTypes.array,
  loading: PropTypes.bool,
};
