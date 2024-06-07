import React from 'react';
import { useIntl } from 'react-intl';
import VisitsGraph from './VisitsGraph';
import AppMenu from '@crema/components/AppMenu';
import PropTypes from 'prop-types';
import {
  StyledCancelVisitCard,
  StyledCancelVisitContent,
  StyledCancelVisitNumber,
  StyledCancelVisitsGraph,
} from './index.styled';

const CancelVisits = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledCancelVisitCard
      title={messages['healthCare.cancelledVisits']}
      extra={<AppMenu />}
    >
      <StyledCancelVisitContent>
        <StyledCancelVisitNumber>32</StyledCancelVisitNumber>
        <span>
          <img src={'/assets/images/dashboard/decries_icon.svg'} alt='down' />
        </span>
      </StyledCancelVisitContent>
      <StyledCancelVisitsGraph>
        <VisitsGraph data={data} />
      </StyledCancelVisitsGraph>
    </StyledCancelVisitCard>
  );
};

export default CancelVisits;

CancelVisits.defaultProps = {
  data: [],
};

CancelVisits.propTypes = {
  data: PropTypes.array,
};
