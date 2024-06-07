import React from 'react';
import SocialMediaGraph from './SocialMediaGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import {
  StyledSocialMediaAdvertise,
  StyledSocialMediaAdvertiseItem,
  StyledSocialMediaAdvName,
  StyledSocialMediaAdvValue,
} from './index.styled';

const SocialMediaAdvertise = (props) => {
  const { socialMediaData } = props;
  const { messages } = useIntl();

  return (
    <AppCard title={messages['dashboard.socialMedia']}>
      <SocialMediaGraph socialMediaData={socialMediaData} />
      <StyledSocialMediaAdvertise>
        {socialMediaData.map((item) => {
          return (
            <StyledSocialMediaAdvertiseItem key={item.id}>
              <h4 style={{ color: item.color }}>{item.revenue}</h4>
              <StyledSocialMediaAdvName>{item.name}</StyledSocialMediaAdvName>
              <StyledSocialMediaAdvValue style={{ color: item.changeColor }}>
                {item.change}
              </StyledSocialMediaAdvValue>
            </StyledSocialMediaAdvertiseItem>
          );
        })}
      </StyledSocialMediaAdvertise>
    </AppCard>
  );
};

export default SocialMediaAdvertise;

SocialMediaAdvertise.defaultProps = {
  socialMediaData: [],
};

SocialMediaAdvertise.propTypes = {
  socialMediaData: PropTypes.array,
};
