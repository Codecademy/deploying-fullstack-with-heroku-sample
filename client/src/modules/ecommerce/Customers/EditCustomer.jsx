import React from 'react';

import { Button, Form, Input } from 'antd';
import { StyledEditCustomerForm } from './index.styled';

const EditCustomer = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledEditCustomerForm
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name='name'
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder='Name' />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder='Email' />
      </Form.Item>

      <Form.Item
        name='address'
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input.TextArea placeholder='Address' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Save
        </Button>
      </Form.Item>
    </StyledEditCustomerForm>
  );
};

export default EditCustomer;
