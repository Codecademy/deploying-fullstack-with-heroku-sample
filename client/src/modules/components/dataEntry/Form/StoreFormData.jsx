import React, { useState } from 'react';
import { Form, Input, Space } from 'antd';
import PropTypes from 'prop-types';

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name='global_state'
    layout='inline'
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name='username'
      label='Username'
      rules={[
        {
          required: true,
          message: 'Username is required!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
);

CustomizedForm.propTypes = {
  onChange: PropTypes.any,
  fields: PropTypes.any,
};

const StoreFormData = () => {
  const [fields, setFields] = useState([
    {
      name: ['username'],
      value: 'Ant Design',
    },
  ]);
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
      <pre className='language-bash'>{JSON.stringify(fields, null, 2)}</pre>
    </Space>
  );
};
export default StoreFormData;
