import React from 'react';
import { Col } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import Member from './Member';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledMemberItem,
  StyledProfileConnection,
  StyledProfileConnectionTitle,
} from './index.styled';

const ProfileConnection = ({ profileConnection }) => {
  return (
    <StyledProfileConnection>
      <StyledProfileConnectionTitle>
        <IntlMessages id='userProfile.profileConnections' />
      </StyledProfileConnectionTitle>
      <AppRowContainer gutter={16}>
        {profileConnection.map((member, index) => {
          return (
            <Col key={index} xs={24} md={12} lg={8} xl={12} xxl={8}>
              <StyledMemberItem>
                <Member member={member} />
              </StyledMemberItem>
            </Col>
          );
        })}
      </AppRowContainer>
    </StyledProfileConnection>
  );
};

export default ProfileConnection;

ProfileConnection.propTypes = {
  profileConnection: PropTypes.array,
};
