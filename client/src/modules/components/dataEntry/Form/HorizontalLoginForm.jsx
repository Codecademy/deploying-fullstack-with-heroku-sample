import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  StyledLoginForm,
  StyledLoginFormBtn,
  StyledLoginFormForget,
} from './horizontalLoginForm.styled';

const HorizontalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <StyledLoginForm
      name='normal_login-1'
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <StyledLoginFormForget href=''>Forgot password</StyledLoginFormForget>
      </Form.Item>

      <Form.Item>
        <StyledLoginFormBtn type='primary' htmlType='submit'>
          Log in
        </StyledLoginFormBtn>
        Or <a href=''>register now!</a>
      </Form.Item>
    </StyledLoginForm>
  );
};
export default HorizontalLoginForm;
