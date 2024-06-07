import React from 'react';
import AppCard from '@crema/components/AppCard';
import VisitsTable from './VisitsTable';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

const PageVisits = ({ pageVisits }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.analytics.pageVisits']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}
    >
      <VisitsTable visitsData={pageVisits} />
    </AppCard>
  );
};

export default PageVisits;

PageVisits.propTypes = {
  pageVisits: PropTypes.array,
};
