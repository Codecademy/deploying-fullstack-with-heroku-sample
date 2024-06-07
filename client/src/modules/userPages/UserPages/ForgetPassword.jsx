import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Input } from 'antd';
import { useIntl } from 'react-intl';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledUserCardHeader,
  StyledUserCardLgSpace,
  StyledUserCardLogo,
  StyledUserCardPara,
  StyledUserContainer,
  StyledUserFieldAction,
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

const ForgetPassword = () => {
  const { messages } = useIntl();
  return (
    <StyledUserPages>
      <AppPageMeta title='Forgot Password' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserContainer key='a'>
          <StyledUserCardLgSpace>
            <StyledUserCardHeader>
              <StyledUserCardLogo>
                <img src={'/assets/images/logo.png'} alt='crema' />
              </StyledUserCardLogo>
              <h3>
                <IntlMessages id='common.forgetPassword' />
              </h3>
            </StyledUserCardHeader>

            <StyledUserCardPara>
              <p className='mb-0'>
                <IntlMessages id='common.forgetPasswordTextOne' />
              </p>
              <p className='mb-0'>
                <IntlMessages id='common.forgetPasswordTextTwo' />
              </p>
            </StyledUserCardPara>

            <StyledUserForm
              className='mb-0'
              name='basic'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <StyledUserFieldAction
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email Address!',
                  },
                ]}
              >
                <Input placeholder={messages['common.emailAddress']} />
              </StyledUserFieldAction>

              <StyledUserFormBtn type='primary' htmlType='submit'>
                <IntlMessages id='common.sendNewPassword' />
              </StyledUserFormBtn>
            </StyledUserForm>
          </StyledUserCardLgSpace>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default ForgetPassword;
