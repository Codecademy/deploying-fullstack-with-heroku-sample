import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';

const FormSize = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout='horizontal'
      initialValues={{
        size: componentSize,
      }}
      style={{ width: '100%' }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label='Form Size' name='size'>
        <Radio.Group>
          <Radio.Button value='small'>Small</Radio.Button>
          <Radio.Button value='default'>Default</Radio.Button>
          <Radio.Button value='large'>Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label='Input'>
        <Input />
      </Form.Item>
      <Form.Item label='Select'>
        <Select>
          <Select.Option value='demo'>Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='TreeSelect'>
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label='Cascader'>
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label='DatePicker'>
        <DatePicker />
      </Form.Item>
      <Form.Item label='InputNumber'>
        <InputNumber />
      </Form.Item>
      <Form.Item label='Switch' valuePropName='checked'>
        <Switch />
      </Form.Item>
      <Form.Item label='Button'>
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};

export default FormSize;
