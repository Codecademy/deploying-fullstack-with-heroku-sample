import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import {
  StyledWidProfileAction,
  StyledWidProfileActionItem,
  StyledWidProfileAvatar,
  StyledWidProfileCard,
  StyledWidProfileInfo,
} from './index.styled';

const Profile = (props) => {
  const { data } = props;

  const { messages } = useIntl();
  return (
    <StyledWidProfileCard
      heightFull
      title={messages['common.wall']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }
    >
      <StyledWidProfileInfo>
        <StyledWidProfileAvatar src={data.image} />
        <h3>{data.name}</h3>
      </StyledWidProfileInfo>

      <StyledWidProfileAction>
        <StyledWidProfileActionItem>
          <h2>{data.photos}</h2>
          <p className='text-truncate text-center'>
            <IntlMessages id='dashboard.photos' />
          </p>
        </StyledWidProfileActionItem>
        <StyledWidProfileActionItem>
          <h2>{data.followers}</h2>
          <p className='text-truncate text-center'>
            <IntlMessages id='dashboard.followers' />
          </p>
        </StyledWidProfileActionItem>
        <StyledWidProfileActionItem>
          <h2>{data.following}</h2>
          <p className='text-truncate text-center'>
            <IntlMessages id='dashboard.following' />
          </p>
        </StyledWidProfileActionItem>
      </StyledWidProfileAction>
    </StyledWidProfileCard>
  );
};

export default Profile;

Profile.propTypes = {
  data: PropTypes.object.isRequired,
};
