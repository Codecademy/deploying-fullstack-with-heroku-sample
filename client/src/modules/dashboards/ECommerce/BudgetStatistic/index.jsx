import React from 'react';
import { FormattedNumber, useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppCard from '@crema/components/AppCard';
import {
  StyledAppCircularProgress,
  StyledFlex,
  StyledFooterAction,
  StyledFooterWrapper,
  StyledSecondary,
  StyledSecondaryText,
  StyledSuccess,
  StyledTitle,
} from './index.styled';
import { grey } from '@ant-design/colors';

const BudgetStatistic = () => {
  const { messages } = useIntl();
  return (
    <AppCard heightFull title={messages['dashboard.eCommerce.budgetStatistic']}>
      <StyledFlex>
        <StyledAppCircularProgress
          strokeColor='#0A8FDC'
          percent={70}
          size={170}
          format={() => (
            <StyledSecondaryText>
              <StyledTitle>
                <FormattedNumber
                  value={1000}
                  maximumFractionDigits={0}
                  style='currency'
                  currency='USD'
                />
              </StyledTitle>
              <StyledSecondary>
                <IntlMessages id='dashboard.eCommerce.totalBudget' />
              </StyledSecondary>
            </StyledSecondaryText>
          )}
        />
      </StyledFlex>
      <div style={{ paddingBottom: 12, paddingTop: 24, margin: 'auto' }}>
        <StyledFooterWrapper>
          <StyledFooterAction>
            <StyledSuccess className='footer-dot' />
            <span className='footer-title'>
              <IntlMessages id='dashboard.eCommerce.completed' />
            </span>
          </StyledFooterAction>
          <StyledFooterAction>
            <div
              className='footer-dot'
              style={{
                backgroundColor: grey[3],
              }}
            />
            <span className='footer-title'>
              <IntlMessages id='dashboard.eCommerce.remaining' />
            </span>
          </StyledFooterAction>
        </StyledFooterWrapper>
      </div>
    </AppCard>
  );
};

export default BudgetStatistic;
