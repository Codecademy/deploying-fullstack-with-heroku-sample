import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import OrdersActivitiesTable from './OrdersActivitiesTable';
import PropTypes from 'prop-types';

const OrdersActivities = ({ ordersActivities }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.crypto.ordersActivities']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <OrdersActivitiesTable ordersActivities={ordersActivities} />
    </AppCard>
  );
};

export default OrdersActivities;

OrdersActivities.propTypes = {
  ordersActivities: PropTypes.array,
};
