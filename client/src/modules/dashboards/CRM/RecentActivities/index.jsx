import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import RecentActivityCell from './RecentActivityCell';
import AppScrollbar from '@crema/components/AppScrollbar';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppMenu from '@crema/components/AppMenu';

const RecentActivities = ({ data }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.crm.recentActivities']}
      action={<AppMenu />}
    >
      <AppScrollbar
        style={{
          height: 675,
        }}
      >
        <AppList
          data={data}
          renderItem={(activity) => (
            <RecentActivityCell key={activity.id} activity={activity} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default RecentActivities;

RecentActivities.propTypes = {
  data: PropTypes.array,
};
