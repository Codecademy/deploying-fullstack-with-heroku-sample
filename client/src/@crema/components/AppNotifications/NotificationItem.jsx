import React from 'react';

import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledNotifyListItem,
  StyledNotifyMsgAvatar,
} from './NotificationItem.styled';

const NotificationItem = (props) => {
  const { item } = props;
  return (
    <StyledNotifyListItem className='item-hover'>
      <List.Item.Meta
        avatar={<StyledNotifyMsgAvatar src={item.image} alt={item.name} />}
        title={item.name}
        description={item.message}
      />
    </StyledNotifyListItem>
  );
};

export default NotificationItem;

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
