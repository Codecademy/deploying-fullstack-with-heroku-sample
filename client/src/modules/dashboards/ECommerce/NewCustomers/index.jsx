import React from 'react';
import AppCard from '@crema/components/AppCard';
import CustomerItem from './CustomerItem';
import { List } from 'antd';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledCustomerScrollbar } from './index.styled';

const NewCustomers = (props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.newCustomers']}
    >
      <StyledCustomerScrollbar style={{ height: 350 }}>
        <List
          dataSource={props.newCustomers}
          renderItem={(item) => <CustomerItem key={item.id} item={item} />}
        />
      </StyledCustomerScrollbar>
    </AppCard>
  );
};

export default NewCustomers;

NewCustomers.propTypes = {
  newCustomers: PropTypes.array,
};
