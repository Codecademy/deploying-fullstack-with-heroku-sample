import React from 'react';
import AppCard from '@crema/components/AppCard';
import PropTypes from 'prop-types';
import StatGraphs from './StatGraphs';
import { useIntl } from 'react-intl';

const ATCStatics = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard title={messages['dashboard.crypto.atcStatics']}>
      <StatGraphs data={data} />
    </AppCard>
  );
};

export default ATCStatics;
ATCStatics.propTypes = {
  data: PropTypes.array,
};
