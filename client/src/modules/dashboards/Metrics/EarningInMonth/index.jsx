import React from 'react';
import EarningGraph from './EarningGraph';
import PropTypes from 'prop-types';
import Categories from './Categories';
import { useIntl } from 'react-intl';
import {
  StyledEarningMonthCard,
  StyledEarningMonthGraphView,
} from './index.styled';

const EarningInMonth = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledEarningMonthCard
      title={messages['dashboard.earningInMonth']}
      actions={[<Categories key={1} data={data} />]}
      heightFull
    >
      <StyledEarningMonthGraphView>
        <EarningGraph data={data} />
      </StyledEarningMonthGraphView>
    </StyledEarningMonthCard>
  );
};

export default EarningInMonth;

EarningInMonth.defaultProps = {
  data: [],
};

EarningInMonth.propTypes = {
  data: PropTypes.array,
};
