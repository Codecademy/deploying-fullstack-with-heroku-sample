import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';
import { AiFillCheckCircle } from 'react-icons/ai';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledVideoCall,
  StyledVideoCallAvatar,
  StyledVideoCallAvatarCount,
  StyledVideoCallAvatarView,
  StyledVideoCallBtn,
  StyledVideoCallBtnView,
  StyledVideoCallCard,
  StyledVideoCallUser,
  StyledVideoCallUserInfo,
  StyledVideoCallUserStatus,
} from './index.styled';

const coverImg = '/assets/images/wall/v-card.jpg';

const VideoCall = ({ data }) => {
  const { users, title } = data;

  return (
    <StyledVideoCallCard cover={<img src={coverImg} alt='V-card' />}>
      <StyledVideoCallUserInfo>
        <StyledVideoCallUser>
          <Avatar src='/assets/images/avatar/A5.jpg' alt='User' />
          <StyledVideoCallUserStatus>
            <AiFillCheckCircle />
          </StyledVideoCallUserStatus>
        </StyledVideoCallUser>
        <h3>
          <IntlMessages id='wall.ericBrickey' />
        </h3>
        <p>
          <IntlMessages id='wall.osloNorway' />
        </p>
      </StyledVideoCallUserInfo>
      <StyledVideoCall>
        <h5>{title}</h5>
        <StyledVideoCallAvatarView>
          {users.slice(0, 4).map((user) => (
            <StyledVideoCallAvatar key={user.id} src={user.profilePic} />
          ))}
          {users.length > 4 ? (
            <StyledVideoCallAvatarCount>
              +{users.length - 4}
            </StyledVideoCallAvatarCount>
          ) : null}
        </StyledVideoCallAvatarView>
        <StyledVideoCallBtnView>
          <Button type='primary' className=''>
            Group Call
          </Button>
          <StyledVideoCallBtn>Video Call</StyledVideoCallBtn>
        </StyledVideoCallBtnView>
      </StyledVideoCall>
    </StyledVideoCallCard>
  );
};

export default VideoCall;

VideoCall.propTypes = {
  data: PropTypes.object,
};
