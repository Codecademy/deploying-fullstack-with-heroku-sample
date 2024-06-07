import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Form, Input } from 'antd';
import { useIntl } from 'react-intl';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledUserCardHeader,
  StyledUserCardLgSpace,
  StyledUserCardLogo,
  StyledUserCardPara,
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

const UnlockScreen = () => {
  const { messages } = useIntl();
  return (
    <StyledUserPages>
      <AppPageMeta title='Unlock Screen' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserContainer key='a'>
          <StyledUserCardLgSpace>
            <StyledUserCardHeader>
              <StyledUserCardLogo>
                <img
                  src={'/assets/images/logo.png'}
                  alt='crema'
                  title='crema'
                />
              </StyledUserCardLogo>
              <h3>
                <IntlMessages id='common.unlockScreen' />
              </h3>
            </StyledUserCardHeader>

            <StyledUserCardPara>
              <p className='mb-0'>
                <IntlMessages id='common.unlockScreenTextOne' />
              </p>
              <p className='mb-0'>
                <IntlMessages id='common.unlockScreenTextTwo' />
              </p>
            </StyledUserCardPara>

            <StyledUserForm
              className='mb-0'
              name='basic'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name='password'
                className='form-field-lg'
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  type='password'
                  placeholder={messages['common.password']}
                />
              </Form.Item>

              <StyledUserFormBtn type='primary' htmlType='submit'>
                <IntlMessages id='common.unlockItForMe' />
              </StyledUserFormBtn>
            </StyledUserForm>
          </StyledUserCardLgSpace>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default UnlockScreen;
