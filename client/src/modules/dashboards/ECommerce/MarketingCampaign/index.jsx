import React from 'react';
import AppCard from '@crema/components/AppCard';
import MarketingTable from './MarketingTable';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppSelect from '@crema/components/AppSelect';

const MarketingCampaign = ({ marketingCampaign }) => {
  const { messages } = useIntl();
  const handleSelectionType = () => {
    console.log('handleSelectionType');
  };

  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.marketingCampaign']}
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
      <MarketingTable marketingCampaignData={marketingCampaign} />
    </AppCard>
  );
};

export default MarketingCampaign;

MarketingCampaign.propTypes = {
  marketingCampaign: PropTypes.array,
};
