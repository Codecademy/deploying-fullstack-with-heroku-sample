import React from 'react';
import AppCard from '@crema/components/AppCard';
import CardDetailItem from './CardDetailItem';
import PropTypes from 'prop-types';
import MonthlyLimitItem from './MonthlyLimitItem';
import { useIntl } from 'react-intl';
import {
  StyledCardDetailContainer,
  StyledCardDetailWrapper,
  StyledCardWrapper,
  StyledDetailItemContainer,
  StyledText,
} from './index.styled';

const CardDetails = ({ cardDetails }) => {
  const { messages } = useIntl();
  return (
    <AppCard title={messages['dashboard.crypto.cardDetails']}>
      <StyledCardWrapper>
        <StyledCardDetailWrapper>
          {cardDetails.cardDetail.map((data, index) => (
            <StyledCardDetailContainer key={index}>
              <CardDetailItem cardDetail={data} />
            </StyledCardDetailContainer>
          ))}
        </StyledCardDetailWrapper>
      </StyledCardWrapper>
      <div
        style={{
          position: 'relative',
        }}
      >
        <StyledText>Monthly Limits</StyledText>
        <StyledCardDetailWrapper>
          {cardDetails.monthlyLimit.map((data, index) => (
            <StyledDetailItemContainer key={index}>
              <MonthlyLimitItem monthlyLimit={data} />
            </StyledDetailItemContainer>
          ))}
        </StyledCardDetailWrapper>
      </div>
    </AppCard>
  );
};

export default CardDetails;

CardDetails.propTypes = {
  cardDetails: PropTypes.object.isRequired,
};
