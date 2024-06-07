import React from 'react';
import PropTypes from 'prop-types';
import StatGraphs from './StatGraphs';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';

const VisitorPageView = ({ data }) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['dashboard.analytics.visitorsPageViews']}
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <StatGraphs data={data} />
    </AppCard>
  );
};
export default VisitorPageView;

VisitorPageView.defaultProps = {
  data: [],
};

VisitorPageView.propTypes = {
  data: PropTypes.array,
};
