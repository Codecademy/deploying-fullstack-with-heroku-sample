import React from 'react';
import PropTypes from 'prop-types';
import VisitorsGraph from './VisitorsGraph';
import { useIntl } from 'react-intl';
import AppCard from '@crema/components/AppCard';
import { green, red } from '@ant-design/colors';
import {
  StyledActiveVisitorContent,
  StyledActiveVisitorContentHeader,
  StyledActiveVisitorFooter,
  StyledActiveVisitorGraph,
  StyledActiveVisitorGraphHeader,
  StyledActiveVisitorGraphWrap,
  StyledActiveVisitorLink,
} from './index.styled';

const ActiveVisitors = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard className='no-card-space'>
      <StyledActiveVisitorGraphWrap>
        <StyledActiveVisitorGraphHeader>
          <h3>{messages['dashboard.analytics.activeVisitors']}</h3>
          <p>{messages['dashboard.analytics.pageViewPerMinutes']}</p>
        </StyledActiveVisitorGraphHeader>
        <StyledActiveVisitorGraph>
          <VisitorsGraph data={data.graphData} />
        </StyledActiveVisitorGraph>
      </StyledActiveVisitorGraphWrap>
      <StyledActiveVisitorContent>
        <div>
          <StyledActiveVisitorContentHeader>
            <h3>{data.value}</h3>
            <span style={{ color: data.growth > 0.0 ? green[6] : red[5] }}>
              {data.growth}% Then yesterday
            </span>
          </StyledActiveVisitorContentHeader>
          <p>{data.slug}</p>
        </div>
        <StyledActiveVisitorFooter>
          <StyledActiveVisitorLink underline='none' to='#'>
            View Report
          </StyledActiveVisitorLink>
        </StyledActiveVisitorFooter>
      </StyledActiveVisitorContent>
    </AppCard>
  );
};

export default ActiveVisitors;

ActiveVisitors.defaultProps = {};

ActiveVisitors.propTypes = {
  data: PropTypes.object,
};
