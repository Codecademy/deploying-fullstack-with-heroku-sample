import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import {
  StyledMyProfileAvatar,
  StyledMyProfileCard,
  StyledMyProfileContent,
  StyledMyProfileFooter,
  StyledMyProfileFooterItem,
  StyledMyProfileIcon,
  StyledMyProfileInfo,
  StyledMyProfileThumb,
  StyledMyProfileTitle,
} from './index.styled';

const MyProfile = ({ profile }) => {
  const { profile_pic, name, designation, achievements, friends } = profile;
  const { messages } = useIntl();

  return (
    <StyledMyProfileCard heightFull title={messages['academy.myProfile']}>
      <StyledMyProfileContent>
        <StyledMyProfileInfo>
          <StyledMyProfileAvatar src={profile_pic} />
          <StyledMyProfileTitle>{name}</StyledMyProfileTitle>
          <p>{designation}</p>
        </StyledMyProfileInfo>

        <StyledMyProfileFooter>
          <StyledMyProfileFooterItem>
            <StyledMyProfileThumb>
              <img
                src={'/assets/images/dashboard/academy/achievements.svg'}
                alt='achievements'
              />
            </StyledMyProfileThumb>
            <h4>{achievements}</h4>
            <p className='text-truncate'>Achievements</p>
          </StyledMyProfileFooterItem>
          <StyledMyProfileFooterItem>
            <StyledMyProfileIcon>
              <UserOutlined style={{ fontSize: 34, color: '#FD3A84' }} />
            </StyledMyProfileIcon>
            <h4>{friends}</h4>
            <p className='text-truncate'>Friends</p>
          </StyledMyProfileFooterItem>
        </StyledMyProfileFooter>
      </StyledMyProfileContent>
    </StyledMyProfileCard>
  );
};

export default MyProfile;

MyProfile.defaultProps = {};

MyProfile.propTypes = {
  profile: PropTypes.object,
};
