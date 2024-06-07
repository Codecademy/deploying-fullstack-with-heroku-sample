import React from 'react';
import EarningGraph from './EarningGraph';
import PropTypes from 'prop-types';
import Categories from './Categories';
import AppCard from '@crema/components/AppCard';
import { List } from 'antd';
import { useIntl } from 'react-intl';
import { StyledEarningGraph, StyledEarningListView } from './index.styled';

export const MonthlyEarning = ({ earningGraphData }) => {
  const { messages } = useIntl();
  return (
    <AppCard heightFull title={messages['dashboard.earningInMonth']}>
      <StyledEarningGraph>
        <EarningGraph earningGraphData={earningGraphData} />
      </StyledEarningGraph>

      <StyledEarningListView>
        <List>
          {earningGraphData.map((category) => {
            if (category.name !== '') {
              return <Categories category={category} key={category.name} />;
            }
            return null;
          })}
        </List>
      </StyledEarningListView>
    </AppCard>
  );
};

export default MonthlyEarning;

MonthlyEarning.defaultProps = {
  earningGraphData: [],
};

MonthlyEarning.propTypes = {
  earningGraphData: PropTypes.array,
};
