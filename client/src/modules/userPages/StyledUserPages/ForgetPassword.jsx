import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Col, Form, Input } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import { useIntl } from 'react-intl';
import AppPageMeta from '@crema/components/AppPageMeta';
import Logo  from '../../../assets/user/forgot-password.svg';
import {
  StyledUserCardForPass,
  StyledUserCardHeader,
  StyledUserCardPara,
  StyledUserContainer,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserStyledForPass,
  StyledUserStyledImg,
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
          <StyledUserCardForPass>
            <AppRowContainer>
              <Col xs={24} lg={12}>
                <StyledUserStyledImg>
                  <img src={Logo} alt={Logo} />
                </StyledUserStyledImg>
              </Col>

              <Col xs={24} lg={12}>
                <StyledUserStyledForPass>
                  <StyledUserCardHeader>
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
                    <Form.Item
                      name='email'
                      className='form-field-lg'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Email Address!',
                        },
                      ]}
                    >
                      <Input placeholder={messages['common.emailAddress']} />
                    </Form.Item>

                    <StyledUserFormBtn type='primary' htmlType='submit'>
                      <IntlMessages id='common.sendNewPassword' />
                    </StyledUserFormBtn>
                  </StyledUserForm>
                </StyledUserStyledForPass>
              </Col>
            </AppRowContainer>
          </StyledUserCardForPass>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default ForgetPassword;
