import React from 'react';
import ReactCodeInput from 'react-code-input';
import { Form, Input } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import useIntl from 'react-intl/lib/src/components/useIntl';
// import {useDispatch} from 'react-redux';
// import {useNavigate, useLocation} from 'react-router-dom';
// import {onSetNewCognitoPassword} from '../../redux/actions';
import AppPageMeta from '@crema/components/AppPageMeta';
import AuthWrapper from '../AuthWrapper';
import {
  StyledAuthReconContent,
  StyledConfirmBtn,
  StyledResetForm,
} from '../AuthWrapper.styled';

const ResetPasswordAwsCognito = () => {
  const { messages } = useIntl();
  // const dispatch = useDispatch();
  //  const navigate = useNavigate();
  // const location = useLocation();

  // const {email} = location.state;
  // const onFinish = (values) => {
  //   dispatch(
  //     onSetNewCognitoPassword(email, values.pin, values.newPassword, history),
  //   );
  // };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AuthWrapper>
      <AppPageMeta title='Reset Password' />

      <StyledAuthReconContent>
        <StyledResetForm
          name='basic'
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='pin'
            className='form-field'
            rules={[{ required: true, message: 'Please input your Pin!' }]}
          >
            <p>
              <IntlMessages id='common.verificationMessage' />
            </p>

            <ReactCodeInput type='password' fields={6} />
          </Form.Item>

          <Form.Item
            name='newPassword'
            className='form-field'
            rules={[
              { required: true, message: 'Please input your New Password!' },
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

          <StyledConfirmBtn type='primary' htmlType='submit'>
            <IntlMessages id='common.resetMyPassword' />
          </StyledConfirmBtn>
        </StyledResetForm>
      </StyledAuthReconContent>
    </AuthWrapper>
  );
};

export default ResetPasswordAwsCognito;
