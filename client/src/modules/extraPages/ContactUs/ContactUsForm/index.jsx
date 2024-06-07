import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';

const ContactUsForm = () => {
  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <AppRowContainer gutter={16}>
        <Col xs={24}>
          <Form.Item
            name='fullName'
            rules={[
              { required: true, message: 'Please input your Full Name!' },
            ]}
          >
            <Input placeholder='Full Name' />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            name='email'
            rules={[
              { required: true, message: 'Please input your e-mail address!' },
            ]}
          >
            <Input type='text' placeholder='E-mail' />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            name='message'
            rules={[{ required: true, message: 'Please input your Message!' }]}
          >
            <Input.TextArea rows={3} placeholder='Message Here' />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <Form.Item shouldUpdate>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default ContactUsForm;
