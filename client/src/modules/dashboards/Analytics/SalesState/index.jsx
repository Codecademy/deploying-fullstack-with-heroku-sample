import React from 'react';
import PropTypes from 'prop-types';

import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Avatar, Col } from 'antd';
import MixBarChart from './MixBarChart';
import AppList from '@crema/components/AppList';
import {
  StyledReactPieChart,
  StyledSalesStateCard,
  StyledSalesStateContent,
  StyledSalesStateItem,
  StyledSalesStateItemContent,
  StyledSalesStateMain,
  StyledSalesStateSubTitle,
} from './index.styled';

const SalesState = ({ salesState, saleChartData }) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const { messages } = useIntl();
  return (
    <StyledSalesStateCard
      title={messages['dashboard.analytics.salesState']}
      heightFull
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
      <StyledSalesStateSubTitle>
        1343 {messages['dashboard.analytics.salesThisWeek']}
      </StyledSalesStateSubTitle>

      <StyledSalesStateMain>
        <AppRowContainer>
          <Col xs={24} sm={14} className='mb-0'>
            <StyledReactPieChart>
              <MixBarChart data={saleChartData} />
            </StyledReactPieChart>
          </Col>

          <Col xs={24} sm={10} className='mb-0'>
            <StyledSalesStateContent>
              <AppList
                data={salesState}
                renderItem={(item) => (
                  <StyledSalesStateItem key={'salesState-' + item.id}>
                    <Avatar src={item.icon} alt='icon' />

                    <StyledSalesStateItemContent>
                      <h3>${item.amount}</h3>
                      <p className='mb-0'>{item.type}</p>
                    </StyledSalesStateItemContent>
                  </StyledSalesStateItem>
                )}
              />
            </StyledSalesStateContent>
          </Col>
        </AppRowContainer>
      </StyledSalesStateMain>
    </StyledSalesStateCard>
  );
};
export default SalesState;

SalesState.defaultProps = {
  salesState: [],
  saleChartData: [],
};

SalesState.propTypes = {
  salesState: PropTypes.array,
  saleChartData: PropTypes.array,
};
