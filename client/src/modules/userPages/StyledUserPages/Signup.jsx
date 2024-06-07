import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Checkbox, Col, Form, Input } from 'antd';
import { useIntl } from 'react-intl';
import AppPageMeta from '@crema/components/AppPageMeta';
import Logo from '../../../assets/user/signup.svg';
import {
  StyledUserCardFooter,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserCardLg,
  StyledUserContainer,
  StyledUserFieldActionLink,
  StyledUserFieldActionRow,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserStyledImg,
} from '../index.styled';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Signup = () => {
  const { messages } = useIntl();

  return (
    <StyledUserPages>
      <AppPageMeta title='Signup' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserContainer key='a'>
          <StyledUserCardLg>
            <AppRowContainer>
              <Col xs={24} lg={12}>
                <StyledUserStyledImg className='mln'>
                  <img src={Logo} alt={Logo} />
                </StyledUserStyledImg>
              </Col>

              <Col xs={24} lg={12}>
                <StyledUserCardHeader>
                  <h3>
                    <IntlMessages id='common.signup' />
                  </h3>
                </StyledUserCardHeader>

                <StyledUserForm
                  name='basic'
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name='name'
                    className='form-field'
                    rules={[
                      { required: true, message: 'Please input your Name!' },
                    ]}
                  >
                    <Input placeholder={messages['common.name']} />
                  </Form.Item>

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

                  <StyledUserFieldActionRow
                    name='remember'
                    valuePropName='checked'
                  >
                    <>
                      <Checkbox>
                        <IntlMessages id='common.iAgreeTo' />
                      </Checkbox>
                      <StyledUserFieldActionLink className='user-field-action-link'>
                        <IntlMessages id='common.termConditions' />
                      </StyledUserFieldActionLink>
                    </>
                  </StyledUserFieldActionRow>

                  <StyledUserFormBtn type='primary' htmlType='submit'>
                    <IntlMessages id='common.signup' />
                  </StyledUserFormBtn>
                </StyledUserForm>

                <StyledUserCardFooter>
                  <span>
                    <IntlMessages id='common.alreadyHaveAccount' />
                  </span>
                  <StyledUserCardFooterLink>
                    <IntlMessages id='common.signInHere' />
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

export default Signup;
