import React from 'react';
import AppCard from '@crema/components/AppCard';
import TopLeadersTable from './TopLeadersTable';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const TopLeaders = ({ topLeaders }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.crm.topLeaders']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <TopLeadersTable topLeaders={topLeaders} />
    </AppCard>
  );
};

export default TopLeaders;
TopLeaders.propTypes = {
  topLeaders: PropTypes.array,
};
