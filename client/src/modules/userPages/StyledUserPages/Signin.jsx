import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimate from '@crema/components/AppAnimate';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Button, Checkbox, Col, Form, Input } from 'antd';
import { FaFacebookF } from 'react-icons/fa';

import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import AppPageMeta from '@crema/components/AppPageMeta';
import Logo from '../../../assets/user/login.svg';
import {
  StyledUserCardFooter,
  StyledUserCardFooterAction,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserCardLg,
  StyledUserContainer,
  StyledUserFieldAction,
  StyledUserFieldActionLink,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserSocialLink,
  StyledUserStyledImg,
} from '../index.styled';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Signin = () => {
  const { messages } = useIntl();
  return (
    <StyledUserPages>
      <AppPageMeta title='Signin' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserContainer key='a'>
          <StyledUserCardLg>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <StyledUserStyledImg className='user-styled-img'>
                  <img src={Logo} alt={Logo} />
                </StyledUserStyledImg>
              </Col>
              <Col xs={24} md={12}>
                <StyledUserCardHeader>
                  <h3>
                    <IntlMessages id='common.login' />
                  </h3>
                </StyledUserCardHeader>

                <StyledUserForm
                  name='basic'
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name='email'
                    className='form-field'
                    rules={[
                      { required: true, message: 'Please input your Email!' },
                    ]}
                  >
                    <Input placeholder={messages['common.email']} />
                  </Form.Item>

                  <Form.Item
                    name='password'
                    className='form-field'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ]}
                  >
                    <Input
                      type='password'
                      placeholder={messages['common.password']}
                    />
                  </Form.Item>

                  <StyledUserFieldAction
                    name='remember'
                    valuePropName='checked'
                  >
                    <>
                      <Checkbox>
                        <IntlMessages id='common.rememberMe' />
                      </Checkbox>
                      <StyledUserFieldActionLink className='user-field-action-link ml-auto'>
                        <IntlMessages id='common.forgetPassword' />
                      </StyledUserFieldActionLink>
                    </>
                  </StyledUserFieldAction>

                  <StyledUserFormBtn type='primary' htmlType='submit'>
                    <IntlMessages id='common.login' />
                  </StyledUserFormBtn>
                </StyledUserForm>

                <StyledUserCardFooterAction>
                  <span>
                    <IntlMessages id='common.orLoginWith' />
                  </span>
                  <StyledUserSocialLink>
                    <Button>
                      <FaFacebookF />
                    </Button>
                    <Button>
                      <GithubOutlined />
                    </Button>
                    <Button>
                      <TwitterOutlined />
                    </Button>
                  </StyledUserSocialLink>
                </StyledUserCardFooterAction>

                <StyledUserCardFooter>
                  <span>
                    <IntlMessages id='common.dontHaveAccount' />
                  </span>
                  <StyledUserCardFooterLink>
                    <IntlMessages id='common.signup' />
                  </StyledUserCardFooterLink>
                </StyledUserCardFooter>
              </Col>
            </AppRowContainer>
          </StyledUserCardLg>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default Signin;
