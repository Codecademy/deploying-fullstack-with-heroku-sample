import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Form, Input } from 'antd';
import { useIntl } from 'react-intl';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledUserCard,
  StyledUserCardHeader,
  StyledUserCardLogo,
  StyledUserContainer,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
} from '../index.styled';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const ResetPassword = () => {
  const { messages } = useIntl();
  return (
    <StyledUserPages>
      <AppPageMeta title='Reset Password' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserContainer key='a'>
          <StyledUserCard>
            <StyledUserCardHeader>
              <StyledUserCardLogo>
                <img
                  src={'/assets/images/logo.png'}
                  alt='crema'
                  title='crema'
                />
              </StyledUserCardLogo>
              <h3>
                <IntlMessages id='common.resetPassword' />
              </h3>
            </StyledUserCardHeader>

            <StyledUserForm
              className='mb-0'
              name='basic'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name='oldPassword'
                className='form-field'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Old Password!',
                  },
                ]}
              >
                <Input
                  type='password'
                  placeholder={messages['common.oldPassword']}
                />
              </Form.Item>

              <Form.Item
                name='newPassword'
                className='form-field'
                rules={[
                  {
                    required: true,
                    message: 'Please input your New Password!',
                  },
                ]}
              >
                <Input
                  type='password'
                  placeholder={messages['common.newPassword']}
                />
              </Form.Item>

              <Form.Item
                name='confirmPassword'
                className='form-field'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Retype Password!',
                  },
                ]}
              >
                <Input
                  type='password'
                  placeholder={messages['common.retypePassword']}
                />
              </Form.Item>

              <StyledUserFormBtn type='primary' htmlType='submit'>
                <IntlMessages id='common.resetMyPassword' />
              </StyledUserFormBtn>
            </StyledUserForm>
          </StyledUserCard>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default ResetPassword;
