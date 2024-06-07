import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import {
  StyledCremaCardHeader,
  StyledCremaLogo,
  StyledCremaPara,
  StyledCremaTitle,
  StyledCremaUserInfoContent,
  StyledSocialLink,
  StyledUserInfo,
} from './index.styled';

const CremaCard = (props) => {
  const { data, bgColor, icon } = props;

  return (
    <AppCard heightFull style={{ backgroundColor: bgColor }}>
      <StyledCremaCardHeader>
        <StyledUserInfo>
          <StyledCremaLogo>
            <img alt='logo' src={data.image} />
          </StyledCremaLogo>
          <StyledCremaUserInfoContent>
            <StyledCremaTitle className='text-truncate text-uppercase'>
              {data.name}
            </StyledCremaTitle>
            <p className='text-truncate'>{data.id}</p>
          </StyledCremaUserInfoContent>
        </StyledUserInfo>
        <StyledSocialLink>{icon}</StyledSocialLink>
      </StyledCremaCardHeader>

      <StyledCremaPara>{data.desc}</StyledCremaPara>
    </AppCard>
  );
};

export default CremaCard;

CremaCard.defaultProps = {
  bgColor: '',
};

CremaCard.propTypes = {
  data: PropTypes.object.isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.any,
};
