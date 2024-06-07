import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrderActions = ({ id, data, status, onChangeStatus }) => {
  const navigate = useNavigate();

  let orderList = [];

  switch (status) {
    case 120: {
      orderList = [
        { status: 121, label: 'Mark as Paid' },
        { status: 122, label: 'Mark as Declined' },
        { status: 123, label: 'Mark as Cancelled' },
      ];
      break;
    }
    case 121: {
      orderList = [
        { status: 123, label: 'Mark as Cancelled' },
        { status: 122, label: 'Mark as Declined' },
      ];
      break;
    }
    case 122: {
      orderList = [
        {
          status: 121,
          label: 'Mark as Paid',
        },
        {
          status: 123,
          label: 'Mark as Cancelled',
        },
      ];
      break;
    }
    case 123: {
      orderList = [
        {
          status: 121,
          label: 'Mark as Paid',
        },
        {
          status: 122,
          label: 'Mark as Declined',
        },
      ];
      break;
    }
  }

  const items = [
    {
      value: 120,
      label: 'View Invoice',
      onClick: () => navigate(`/invoice/pdf/${id}`),
    },
  ];

  orderList?.forEach((item) => {
    items.push({
      value: item.status,
      label: item.label,
      onClick: () => onChangeStatus(data, item.status),
    });
  });

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button type='circle'>
        <MoreOutlined />
      </Button>
    </Dropdown>
  );
};

OrderActions.propTypes = {
  id: PropTypes.number,
  data: PropTypes.object,
  status: PropTypes.number,
  onChangeStatus: PropTypes.func,
};
export default OrderActions;
