import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Select, Space } from 'antd';
import { StyledCustomizedFormControl } from './customizedFormControls.styled';

const { Option } = Select;

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState('rmb');

  const triggerChange = (changedValue) => {
    if (onChange) {
      onChange({
        number,
        currency,
        ...value,
        ...changedValue,
      });
    }
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || 0, 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <span>
      <Input
        type='text'
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: '63%',
          marginRight: '5%',
        }}
      />
      <Select
        value={value.currency || currency}
        style={{
          width: '32%',
        }}
        onChange={onCurrencyChange}
      >
        <Option value='rmb'>RMB</Option>
        <Option value='dollar'>Dollar</Option>
      </Select>
    </span>
  );
};

PriceInput.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
};
const CustomizedFormControls = () => {
  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (rule, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject('Price must be greater than zero!');
  };

  return (
    <Space>
      <StyledCustomizedFormControl
        name='customized_form_controls'
        layout='inline'
        onFinish={onFinish}
        initialValues={{
          price: {
            number: 0,
            currency: 'rmb',
          },
        }}
      >
        <Form.Item
          name='price'
          label='Price'
          rules={[
            {
              validator: checkPrice,
            },
          ]}
        >
          <PriceInput />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </StyledCustomizedFormControl>
    </Space>
  );
};
export default CustomizedFormControls;
