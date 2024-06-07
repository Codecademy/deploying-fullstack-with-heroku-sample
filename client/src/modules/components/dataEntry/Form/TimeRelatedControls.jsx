import React from 'react';
import { Button, DatePicker, Form, TimePicker } from 'antd';

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};

const TimeRelatedControls = () => {
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('MMM DD,YYYY'),
      'date-time-picker': fieldsValue['date-time-picker'].format(
        'MMM DD,YYYY HH:mm:ss',
      ),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [
        rangeValue[0].format('MMM DD,YYYY'),
        rangeValue[1].format('MMM DD,YYYY'),
      ],
      'range-time-picker': [
        rangeTimeValue[0].format('MMM DD,YYYY HH:mm:ss'),
        rangeTimeValue[1].format('MMM DD,YYYY HH:mm:ss'),
      ],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
  };

  return (
    <Form name='time_related_controls' {...formItemLayout} onFinish={onFinish}>
      <Form.Item name='date-picker' label='DatePicker' {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name='date-time-picker'
        label='DatePicker[showTime]'
        {...config}
      >
        <DatePicker showTime format='MMM DD,YYYY HH:mm:ss' />
      </Form.Item>
      <Form.Item name='month-picker' label='MonthPicker' {...config}>
        <DatePicker picker='month' />
      </Form.Item>
      <Form.Item name='range-picker' label='RangePicker' {...rangeConfig}>
        <RangePicker />
      </Form.Item>
      <Form.Item
        name='range-time-picker'
        label='RangePicker[showTime]'
        {...rangeConfig}
      >
        <RangePicker showTime format='MMM DD,YYYY HH:mm:ss' />
      </Form.Item>
      <Form.Item name='time-picker' label='TimePicker' {...config}>
        <TimePicker />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TimeRelatedControls;
