import AppCard from '@crema/components/AppCard';
import React from 'react';
import { Col, DatePicker, Form, InputNumber, Select, Switch } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { StyledFormWrapper } from './index.styled';

const { Option } = Select;

const statusList = [
  {
    id: 1,
    name: 'In Stock',
    value: true,
  },
  {
    id: 2,
    name: 'Out of Stock',
    value: false,
  },
];

const FilterItem = ({ filterData, setFilterData }) => {
  return (
    <AppCard title='Filter Item'>
      <StyledFormWrapper layout='vertical'>
        <AppRowContainer gutter={{ xs: 16, sm: 16, md: 20 }}>
          <Col xs={24}>
            <Form.Item label='Status'>
              <Select
                placeholder='Status'
                onChange={(value) => {
                  setFilterData((prev) => ({
                    ...prev,
                    inStock: [value === 1],
                  }));
                }}
              >
                {statusList.map((status) => (
                  <Option key={status.id} value={status.id}>
                    {status.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label='Start Price'>
              <InputNumber
                label='Start Price'
                placeholder='Start Price'
                onChange={(value) => {
                  setFilterData((prev) => ({
                    ...prev,
                    mrp: { start: +value, end: filterData.mrp.end },
                  }));
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label='End Price'>
              <InputNumber
                placeholder='End Price'
                onChange={(value) => {
                  setFilterData((prev) => ({
                    ...prev,
                    mrp: { start: filterData.mrp.start, end: +value },
                  }));
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label='Start Date'>
              <DatePicker
                defaultValue={filterData?.createdAt?.start}
                allowClear={false}
                onChange={(value) => {
                  setFilterData((prev) => ({
                    ...prev,
                    createdAt: {
                      start: dayjs(value).format('DD MMM YYYY'),
                      end: filterData?.createdAt?.end,
                    },
                  }));
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label='End Date'>
              <DatePicker
                defaultValue={filterData?.createdAt?.end}
                allowClear={false}
                onChange={(value) =>
                  setFilterData((prev) => ({
                    ...prev,
                    createdAt: {
                      start: filterData?.createdAt?.start,
                      end: dayjs(value).format('DD MMM YYYY'),
                    },
                  }))
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Switch />
            <span className='notification'>Notifications</span>
          </Col>
        </AppRowContainer>
      </StyledFormWrapper>
    </AppCard>
  );
};

export default FilterItem;

FilterItem.propTypes = {
  filterData: PropTypes.object.isRequired,
  setFilterData: PropTypes.func.isRequired,
};
