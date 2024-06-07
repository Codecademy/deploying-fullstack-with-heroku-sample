import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import {
  StyledBadgeRoot,
  StyledContentAction,
  StyledContentArea,
  StyledCustomItem,
} from './index.styled';

const CustomerItem = ({ item }) => {
  const getStatusColor = () => {
    if (item.orders === 0) {
      return '#F84E4E';
    } else if (item.orders > 0) {
      return '#43C888';
    }
  };

  return (
    <StyledCustomItem className='item-hover'>
      <Avatar src={item.image} />
      <StyledContentArea>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
      </StyledContentArea>
      <StyledContentAction>
        <StyledBadgeRoot
          style={{
            color: getStatusColor(),
            backgroundColor: getStatusColor() + '44',
          }}
        >
          {item.orders} orders
        </StyledBadgeRoot>
        <Button onClick={null} shape='circle' icon={<MoreOutlined />} />
      </StyledContentAction>
    </StyledCustomItem>
  );
};

export default CustomerItem;

CustomerItem.propTypes = {
  item: PropTypes.object.isRequired,
};
