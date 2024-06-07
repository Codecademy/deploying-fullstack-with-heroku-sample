import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProfileBox,
  StyledProfileContainer,
  StyledProfileDesig,
  StyledProfileDetailWrapper,
  StyledProfileItemWrapper,
  StyledProfileName,
  StyledProfilePic,
  StyledProfileSecondary,
  StyledProfileWrapper,
} from './index.styled';
import { Avatar, Typography } from 'antd';

const ProfileItem = ({ profile }) => {
  return (
    <StyledProfileItemWrapper>
      <StyledProfilePic>
        <Avatar className='avatar-pic' src={profile.srcImg} size={84} />
      </StyledProfilePic>
      <StyledProfileName>{profile.name}</StyledProfileName>
      <StyledProfileDesig>{profile.designation}</StyledProfileDesig>
      <StyledProfileWrapper>
        <StyledProfileContainer>
          <StyledProfileDetailWrapper>
            <Typography.Title level={5}>{profile.years}</Typography.Title>
            <StyledProfileSecondary>Years</StyledProfileSecondary>
          </StyledProfileDetailWrapper>
          <StyledProfileDetailWrapper>
            <Typography.Title level={5}>{profile.blood}</Typography.Title>
            <StyledProfileSecondary>Blood</StyledProfileSecondary>
          </StyledProfileDetailWrapper>
        </StyledProfileContainer>
        <StyledProfileBox>
          <StyledProfileDetailWrapper>
            <Typography.Title level={5}>{profile.height} cm</Typography.Title>
            <StyledProfileSecondary>Height</StyledProfileSecondary>
          </StyledProfileDetailWrapper>
          <StyledProfileDetailWrapper>
            <Typography.Title level={5}>{profile.weight} kg</Typography.Title>
            <StyledProfileSecondary>Weight</StyledProfileSecondary>
          </StyledProfileDetailWrapper>
        </StyledProfileBox>
      </StyledProfileWrapper>
    </StyledProfileItemWrapper>
  );
};

export default ProfileItem;

ProfileItem.propTypes = {
  profile: PropTypes.object,
};
