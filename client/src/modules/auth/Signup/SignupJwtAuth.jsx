import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import {
  StyledSignLinkTag,
  StyledSignUp,
  StyledSignUpBtn,
  StyledSignupCheckBox,
  StyledSignUpContent,
  StyledSignUpForm,
  StyledSignupLink,
  StyledSignUpTestGrey,
} from './index.styled';

const SignupJwtAuth = () => {
  const { messages } = useIntl();
  const { signUpUser } = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledSignUp>
      <StyledSignUpContent>
        <StyledSignUpForm
          name='basic'
          initialValues={{ remember: true }}
          onFinish={signUpUser}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='name'
            className='form-field'
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input placeholder={messages['common.name']} />
          </Form.Item>

          <Form.Item
            name='email'
            className='form-field'
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input placeholder={messages['common.email']} />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password placeholder={messages['common.password']} />
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
            <Input.Password placeholder={messages['common.retypePassword']} />
          </Form.Item>

          <StyledSignupCheckBox
            className='form-field'
            name='iAgreeTo'
            valuePropName='checked'
          >
            <Checkbox>
              <IntlMessages id='common.iAgreeTo' />
            </Checkbox>
            <StyledSignupLink>
              <IntlMessages id='common.termConditions' />
            </StyledSignupLink>
          </StyledSignupCheckBox>

          <div className='form-btn-field'>
            <StyledSignUpBtn type='primary' htmlType='submit'>
              <IntlMessages id='common.signup' />
            </StyledSignUpBtn>
          </div>

          <div className='form-field-action'>
            <StyledSignUpTestGrey>
              <IntlMessages id='common.alreadyHaveAccount' />
            </StyledSignUpTestGrey>
            <StyledSignLinkTag to='/signIn'>
              <IntlMessages id='common.signIn' />
            </StyledSignLinkTag>
          </div>
        </StyledSignUpForm>
      </StyledSignUpContent>
    </StyledSignUp>
  );
};

export default SignupJwtAuth;
