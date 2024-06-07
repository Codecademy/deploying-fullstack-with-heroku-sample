import React from 'react';
import AccountGraph from './AccountGraph';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import {
  StyledYourAccountCard,
  StyledYourAccountCardGraph,
} from './index.styled';

const YourAccount = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledYourAccountCard heightFull title={messages['dashboard.yourAccount']}>
      <StyledYourAccountCardGraph>
        <AccountGraph data={data} />
      </StyledYourAccountCardGraph>
    </StyledYourAccountCard>
  );
};

export default YourAccount;

YourAccount.defaultProps = {
  data: [],
};

YourAccount.propTypes = {
  data: PropTypes.array,
};
