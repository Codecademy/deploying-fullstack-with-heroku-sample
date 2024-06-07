import React, { useState } from 'react';
import VisitsGraph from './VisitsGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppSelect from '@crema/components/AppSelect';
import { StyledVisitsCard, StyledVisitsFooter } from './index.styled';

const Visits = ({ data }) => {
  const [graphData, setGraphData] = useState(data.graphData.dataOne);

  const handleWeekChange = (value) => {
    switch (value) {
      case 'This Week':
        setGraphData(data.graphData.dataTwo);
        break;
      case 'Last Weeks':
        setGraphData(data.graphData.dataOne);
        break;
      case 'Last Month':
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  const { messages } = useIntl();

  return (
    <StyledVisitsCard
      title={messages['dashboard.visits']}
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleWeekChange}
        />
      }
      heightFull
      actions={[
        <StyledVisitsFooter key={1}>
          <p>
            <IntlMessages id='common.new' />
            <span>{data.new}</span>
          </p>
          <p>
            <IntlMessages id='common.returning' />
            <span>{data.returning}</span>
          </p>
        </StyledVisitsFooter>,
      ]}
    >
      <VisitsGraph data={graphData} />
    </StyledVisitsCard>
  );
};

export default Visits;

Visits.defaultProps = {
  data: {
    new: 0,
    returning: 0,
    graphData: {
      dataOne: [],
      dataTwo: [],
      dataThree: [],
    },
  },
};

Visits.propTypes = {
  data: PropTypes.object,
};
