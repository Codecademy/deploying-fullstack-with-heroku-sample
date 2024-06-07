import React from 'react';
import AudienceChart from './AudienceChart';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AudienceCell from './AudienceCell';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import { StyledBox, StyledFlexBox } from './index.styled';

const AgeOfAudience = ({ audienceData }) => {
  const { messages } = useIntl();

  return (
    <AppCard title={messages['dashboard.eCommerce.ageAudience']}>
      <StyledFlexBox>
        <StyledBox>
          <AudienceChart audienceData={audienceData} />
        </StyledBox>

        <AppList
          data={audienceData}
          renderItem={(audience) => (
            <AudienceCell key={'audience-' + audience.id} audience={audience} />
          )}
        />
      </StyledFlexBox>
    </AppCard>
  );
};

export default AgeOfAudience;

AgeOfAudience.propTypes = {
  audienceData: PropTypes.array,
};
