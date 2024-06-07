import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import React from 'react';
import AppScrollbar from '@crema/components/AppScrollbar';
import PropTypes from 'prop-types';
import useIntl from 'react-intl/lib/src/components/useIntl';
import {
  StyledContent,
  StyledFlex,
  StyledPadding,
  StyledTitle,
} from './index.styled';
import { Progress } from 'antd';

const RevenueItem = ({ item }) => {
  return (
    <StyledPadding key={item.id} className='item-hover'>
      <StyledFlex>
        <StyledTitle>{item.name}</StyledTitle>
        <StyledContent>{item.value}%</StyledContent>
      </StyledFlex>
      <Progress
        type='line'
        showInfo={false}
        percent={item.value}
        size='small'
        strokeColor='#0A8FDC'
      />
    </StyledPadding>
  );
};

RevenueItem.propTypes = {
  item: PropTypes.object,
};

const Revenue = ({ revenueData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.eCommerce.revenue']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
      className='no-card-space-ltr-rtl'
    >
      <AppScrollbar style={{ maxHeight: 200 }}>
        <AppList
          animation='transition.slideRightBigIn'
          data={revenueData}
          renderItem={(data, index) => <RevenueItem key={index} item={data} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Revenue;

Revenue.propTypes = {
  revenueData: PropTypes.array,
};
