import React from 'react';
import VisitorGraph from './VisitorGraph';
import { List } from 'antd';
import PropTypes from 'prop-types';
import Categories from './Categories';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { StyledEarningGraphWrapper } from './index.styled';

export const TotalVisitor = ({ totalVisitors }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['dashboard.crm.totalVisitor']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <StyledEarningGraphWrapper>
        <div className='earning-item earning-graph-item'>
          <VisitorGraph totalVisitors={totalVisitors} />
        </div>
        <div className='earning-item'>
          <List>
            {totalVisitors.map((category) => {
              if (category.name !== '') {
                return <Categories category={category} key={category.name} />;
              }
              return null;
            })}
          </List>
        </div>
      </StyledEarningGraphWrapper>
    </AppCard>
  );
};

export default TotalVisitor;

TotalVisitor.defaultProps = {
  totalVisitors: [],
};

TotalVisitor.propTypes = {
  totalVisitors: PropTypes.array,
};
