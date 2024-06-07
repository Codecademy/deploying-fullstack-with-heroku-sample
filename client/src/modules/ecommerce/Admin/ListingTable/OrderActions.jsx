import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const OrderActions = ({ id }) => {
  const navigate = useNavigate();
  const items = [
    {
      key: 1,
      label: <span style={{ fontSize: 14 }}>View Order</span>,
    },
    {
      key: 2,
      label: <span style={{ fontSize: 14 }}>Edit</span>,
    },
    { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span> },
  ];

  const onMenuClick = ({ item, key }) => {
    console.log('item', item);
    switch (key) {
      case '1':
        navigate('/apps/ecommerce/orders');
        break;
      case '2':
        navigate(`/apps/ecommerce-admin/edit-products/${id}`);
        break;
      case '3':
        break;
      default:
        break;
    }
  };

  return (
    <Dropdown menu={{ items, onClick: onMenuClick }} trigger={['click']}>
      <Button type='circle'>
        <MoreOutlined />
      </Button>
    </Dropdown>
  );
};
export default OrderActions;

OrderActions.propTypes = {
  id: PropTypes.number,
};
