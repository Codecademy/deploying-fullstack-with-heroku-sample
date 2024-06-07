import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from '../index.styled';

const ChangePassword = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledUserProfileForm
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledUserProfileFormTitle>
        <IntlMessages id='userProfile.changePassword' />
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name='oldPassword'
            rules={[
              { required: true, message: 'Please input your Enter Password' },
            ]}
          >
            <Input.Password placeholder='Enter password' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} />
        <Col xs={24} md={12}>
          <Form.Item
            name='password'
            rules={[
              { required: true, message: 'Please input your New Password!' },
            ]}
          >
            <Input.Password placeholder='Enter new password' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name='confirmPassword'
            rules={[
              {
                required: true,
                message: 'Please input Your Confirm Password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The Confirm Password that you entered do not match!',
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder='Confirm new password' />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className='user-profile-group-btn'
          >
            <Button type='primary' htmlType='submit'>
              Save Changes
            </Button>
            <Button htmlType='cancel'>Cancel</Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer>
    </StyledUserProfileForm>
  );
};

export default ChangePassword;
