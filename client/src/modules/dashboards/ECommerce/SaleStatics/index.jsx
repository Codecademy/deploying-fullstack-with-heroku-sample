import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import AppSelect from '@crema/components/AppSelect';
import SaleStaticChart from './SaleStaticChart';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import {
  StyledChartActionItem,
  StyledChartContainer,
  StyledChartContainerAction,
  StyledChartContainerView,
} from './index.styled';
import { StyledAppProgressCircular } from '../Revenue/index.styled';

const SaleStatics = () => {
  const { messages } = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  return (
    <AppCard
      title={messages['eCommerce.saleStatics']}
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
      <AppRowContainer>
        <Col xs={24} md={18}>
          <SaleStaticChart />
        </Col>
        <Col xs={24} md={6}>
          <StyledChartContainerView>
            <StyledChartContainer>
              <StyledAppProgressCircular
                strokeColor='#0A8FDC'
                trailColor='#F44D50'
                percent={70}
                size='small'
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
                <span className='dot' style={{ backgroundColor: '#0A8FDC' }} />
                <p>Android</p>
              </StyledChartActionItem>
              <StyledChartActionItem>
                <span className='dot' style={{ backgroundColor: '#F44D50' }} />
                <p>IOS</p>
              </StyledChartActionItem>
            </StyledChartContainerAction>
          </StyledChartContainerView>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default SaleStatics;
