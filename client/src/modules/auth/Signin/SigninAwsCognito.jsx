import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { GoogleOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import { FaFacebookF } from 'react-icons/fa';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import { useAwsCognito } from '@crema/services/auth/aws-cognito/AWSAuthProvider';
import {
  StyledRememberMe,
  StyledSign,
  StyledSignBtn,
  StyledSignContent,
  StyledSignedText,
  StyledSignFooter,
  StyledSignForm,
  StyledSignIconBtn,
  StyledSignLink,
  StyledSignLinkTag,
  StyledSignSocialLink,
  StyledSignTextGrey,
} from './index.styled';

const SigninAwsCognito = () => {
  const { signIn } = useAuthMethod();
  const { auth } = useAwsCognito();
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onGoToForgetPassword = () => {
    navigate('/forget-password', { tab: 'awsCognito' });
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { messages } = useIntl();

  return (
    <StyledSign>
      <StyledSignContent>
        <StyledSignForm
          name='basic'
          initialValues={{
            remember: true,
            email: 'crema.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          onFinish={signIn}
          onFinishFailed={onFinishFailed}
        >
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

          <StyledRememberMe>
            <Checkbox onChange={onRememberMe}>
              <IntlMessages id='common.rememberMe' />
            </Checkbox>

            <StyledSignLink onClick={onGoToForgetPassword}>
              <IntlMessages id='common.forgetPassword' />
            </StyledSignLink>
          </StyledRememberMe>

          <div className='form-btn-field'>
            <StyledSignBtn type='primary' htmlType='submit'>
              <IntlMessages id='common.login' />
            </StyledSignBtn>
          </div>

          <div className='form-field-action'>
            <StyledSignTextGrey>
              <IntlMessages id='common.dontHaveAccount' />
            </StyledSignTextGrey>
            <StyledSignLinkTag to='/signup'>
              <IntlMessages id='common.signup' />
            </StyledSignLinkTag>
          </div>
        </StyledSignForm>
      </StyledSignContent>

      <StyledSignFooter>
        <StyledSignedText>
          <IntlMessages id='common.orLoginWith' />
        </StyledSignedText>
        <StyledSignSocialLink>
          <StyledSignIconBtn
            aria-label='google'
            icon={<GoogleOutlined />}
            onClick={() => auth.federatedSignIn({ provider: 'Google' })}
          />
          <StyledSignIconBtn
            aria-label='facebook'
            icon={<FaFacebookF />}
            onClick={() => auth.federatedSignIn({ provider: 'Facebook' })}
          />
        </StyledSignSocialLink>
      </StyledSignFooter>
    </StyledSign>
  );
};

export default SigninAwsCognito;
