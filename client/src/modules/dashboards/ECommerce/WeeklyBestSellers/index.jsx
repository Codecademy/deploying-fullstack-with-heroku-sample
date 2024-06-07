import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import AppScrollbar from '@crema/components/AppScrollbar';

import BestSellersCell from './BestSellersCell';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const WeeklyBestSellers = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.eCommerce.weeklyBestSellers']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <AppScrollbar style={{ maxHeight: 230 }}>
        <AppList
          data={data}
          renderItem={(bestSeller) => (
            <BestSellersCell key={bestSeller.id} bestSeller={bestSeller} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default WeeklyBestSellers;

WeeklyBestSellers.propTypes = {
  data: PropTypes.array,
};
