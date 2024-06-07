import React from 'react';
import AppCard from '@crema/components/AppCard';
import SalesChart from './SalesChart';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledContent,
  StyledDotAction,
  StyledFlex,
  StyledPrimaryText,
  StyledSecondaryText,
} from './index.styled';

const SalesReport = () => {
  const { messages } = useIntl();

  const handleSelectionType = () => {
    console.log('handleSelectionType');
  };

  return (
    <AppCard
      style={{ position: 'relative' }}
      title={messages['dashboard.eCommerce.salesReportOverview']}
      action={
        <StyledFlex>
          <StyledContent>
            <StyledDotAction>
              <StyledSecondaryText className='dot-icon' />
              <IntlMessages id='dashboard.eCommerce.return' />
            </StyledDotAction>
            <StyledDotAction>
              <StyledPrimaryText className='dot-icon' />
              <IntlMessages id='common.orders' />
            </StyledDotAction>
          </StyledContent>
          <AppSelect
            menus={[
              messages['dashboard.thisWeek'],
              messages['dashboard.lastWeeks'],
              messages['dashboard.lastMonth'],
            ]}
            defaultValue={messages['dashboard.thisWeek']}
            onChange={handleSelectionType}
          />
        </StyledFlex>
      }
    >
      <SalesChart />
    </AppCard>
  );
};

export default SalesReport;
