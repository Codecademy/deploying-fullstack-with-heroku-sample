import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import {
  StyledChartActionItem,
  StyledChartContainer,
  StyledChartContainerAction,
  StyledChartContainerView,
} from '../SaleStatics/index.styled';
import { StyledAppProgressCircular } from '../Revenue/index.styled';

const Application = () => {
  const { messages } = useIntl();
  return (
    <AppCard title={messages['eCommerce.application']} heightFull>
      <StyledChartContainerView>
        <StyledChartContainer>
          <StyledAppProgressCircular
            strokeColor='#49BD65'
            percent={70}
            strokeWidth={5}
            format={() => (
              <img
                alt='icon'
                style={{
                  borderRadius: '50%',
                  // boxShadow: '0px 10px 20px rgba(160, 165, 185, 0.2)',
                }}
                src={'/assets/images/dashboard/application_icon.svg'}
              />
            )}
          />
        </StyledChartContainer>
        <StyledChartContainerAction>
          <StyledChartActionItem>
            <span className='dot' style={{ backgroundColor: '#49BD65' }} />
            <p>Android</p>
          </StyledChartActionItem>
          <StyledChartActionItem>
            <span className='dot' style={{ backgroundColor: '#d6d6d6' }} />
            <p>IOS</p>
          </StyledChartActionItem>
        </StyledChartContainerAction>
      </StyledChartContainerView>
    </AppCard>
  );
};

export default Application;
