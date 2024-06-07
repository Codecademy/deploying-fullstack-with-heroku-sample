import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import { FaFacebookF } from 'react-icons/fa';
import { useAuthMethod } from '@crema/hooks/AuthHooks';

import {
  StyledSignedText,
  StyledSignFooter,
  StyledSignIconBtn,
  StyledSignLinkTag,
  StyledSignSocialLink,
  StyledSignUp,
  StyledSignUpBtn,
  StyledSignupCheckBox,
  StyledSignUpContent,
  StyledSignUpForm,
  StyledSignupLink,
  StyledSignUpTestGrey,
} from './index.styled';
import { useAwsCognito } from '@crema/services/auth/aws-cognito/AWSAuthProvider';

const SignupAwsCognito = () => {
  const { signUpCognitoUser } = useAuthMethod();
  const { auth } = useAwsCognito();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const { messages } = useIntl();
  return (
    <StyledSignUp>
      <StyledSignUpContent>
        <StyledSignUpForm
          name='basic'
          initialValues={{ remember: true }}
          onFinish={signUpCognitoUser}
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

      <StyledSignFooter>
        <StyledSignedText>
          <IntlMessages id='auth.orSignupWith' />
        </StyledSignedText>

        <StyledSignSocialLink>
          <StyledSignIconBtn
            aria-label='Google'
            shape='circle'
            onClick={() => auth.federatedSignIn({ provider: 'Google' })}
            icon={<GoogleOutlined />}
          />
          <StyledSignIconBtn
            aria-label='Faceboook'
            shape='circle'
            onClick={() => auth.federatedSignIn({ provider: 'Facebook' })}
            icon={<FaFacebookF />}
          />
        </StyledSignSocialLink>
      </StyledSignFooter>
    </StyledSignUp>
  );
};

export default SignupAwsCognito;
