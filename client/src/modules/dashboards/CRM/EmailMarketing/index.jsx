import React from 'react';
import AppCard from '@crema/components/AppCard';
import Categories from './Categories';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import ChartView from './ChartView';
import { StyledChartViewWrapper } from './index.styled';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/components/AppSkeleton/SidebarListSkeleton';
import AppGrid from '@crema/components/AppGrid';

export const EmailMarking = ({ emailMarketing }) => {
  const { messages } = useIntl();
  return (
    <AppCard title={messages['dashboard.crm.emailMarketing']}>
      <StyledChartViewWrapper>
        <ChartView data={emailMarketing} />
      </StyledChartViewWrapper>
      <AppGrid
        data={emailMarketing}
        ListEmptyComponent={
          <ListEmptyResult
            loading={true}
            placeholder={<SidebarPlaceholder />}
          />
        }
        renderItem={(category) => {
          return <Categories category={category} key={category.id} />;
        }}
      />
    </AppCard>
  );
};

export default EmailMarking;

EmailMarking.defaultProps = {
  emailMarketing: [],
};

EmailMarking.propTypes = {
  emailMarketing: PropTypes.array,
};
