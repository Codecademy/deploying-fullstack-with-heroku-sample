import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

const FormLayout = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        style={{ maxWidth: 600, width: '100%' }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label='Form Layout' name='layout'>
          <Radio.Group value={formLayout}>
            <Radio.Button value='horizontal'>Horizontal</Radio.Button>
            <Radio.Button value='vertical'>Vertical</Radio.Button>
            <Radio.Button value='inline'>Inline</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Field A'>
          <Input placeholder='input placeholder' />
        </Form.Item>
        <Form.Item label='Field B'>
          <Input placeholder='input placeholder' />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type='primary'>Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLayout;
