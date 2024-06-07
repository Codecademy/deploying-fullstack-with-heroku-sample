import React from 'react';
import { Button, Switch } from 'antd';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledNotificationList,
  StyledNotificationListItem,
  StyledProfileNotification,
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from '../index.styled';

const Notification = ({ notification }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <StyledUserProfileForm
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledProfileNotification className='profile-notification'>
        <StyledUserProfileFormTitle>
          <IntlMessages id='userProfile.activity' />
        </StyledUserProfileFormTitle>
        <StyledNotificationList>
          {notification.activity.map((activity, index) => {
            return (
              <StyledNotificationListItem key={index}>
                <Switch
                  defaultChecked={activity.defaultChecked}
                  onChange={onChange}
                />
                <label className='label'>{activity.title}</label>
              </StyledNotificationListItem>
            );
          })}
        </StyledNotificationList>
      </StyledProfileNotification>

      <StyledProfileNotification className='profile-notification'>
        <StyledUserProfileFormTitle>
          <IntlMessages id='userProfile.application' />
        </StyledUserProfileFormTitle>
        <StyledNotificationList>
          {notification.application.map((application, index) => {
            return (
              <StyledNotificationListItem key={index}>
                <Switch
                  defaultChecked={application.defaultChecked}
                  onChange={onChange}
                />
                <label className='label'>{application.title}</label>
              </StyledNotificationListItem>
            );
          })}
        </StyledNotificationList>
      </StyledProfileNotification>

      <StyledUserProfileGroupBtn
        shouldUpdate
        className='user-profile-group-btn'
      >
        <Button type='primary' htmlType='submit'>
          Save Changes
        </Button>
        <Button htmlType='cancel'>Cancel</Button>
      </StyledUserProfileGroupBtn>
    </StyledUserProfileForm>
  );
};

export default Notification;

Notification.propTypes = {
  notification: PropTypes.object,
};
