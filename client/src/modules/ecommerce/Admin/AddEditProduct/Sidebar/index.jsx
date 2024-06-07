import React from 'react';
import AppCard from '@crema/components/AppCard';
import { productCategory } from '@crema/mockapi/fakedb/ecommerce/ecommerceData';
import { useNavigate } from 'react-router-dom';
import AppRowContainer from '@crema/components/AppRowContainer';
import AppScrollbar from '@crema/components/AppScrollbar';
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Switch,
} from 'antd';
import { useIntl } from 'react-intl';
import { StyledFormWrapper } from './index.styled';
import PropTypes from 'prop-types';

const TagList = [
  {
    value: 1,
    label: 'Fashion',
  },
  {
    value: 2,
    label: 'Hotel',
  },
  {
    value: 3,
    label: 'Event',
  },
];

const { Option } = Select;
const BlogSidebar = ({
  form,
  isEdit,
  productInfo,
  productSpec,
  setProductSpec,
  setProductInfo,
  selectedTags,
  setSelectedTags,
}) => {
  const { messages } = useIntl();
  const navigate = useNavigate();

  return (
    <Col xs={24} lg={8}>
      <AppScrollbar style={{ height: '700px' }}>
        <StyledFormWrapper>
          <AppCard title='Product Details'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className='mr-10 mb-20'>In Stock</span>
              <Form.Item name='inStock' valuePropName='checked'>
                <Switch
                  defaultChecked={form.getFieldValue('inStock')}
                  onChange={(checked) => form.setFieldValue('inStock', checked)}
                />
              </Form.Item>
            </div>

            <Form.Item label='Product SKU' name='SKU'>
              <Input placeholder='Product SKU' />
            </Form.Item>

            <Form.Item label={messages['common.category']} name='category'>
              <Select placeholder={messages['common.category']}>
                {productCategory.map((category) => {
                  return (
                    <Option value={category.id} key={category.id}>
                      {category.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item label='Tags' name='tag'>
              <Select
                mode='multiple'
                allowClear
                placeholder='Tags'
                value={selectedTags}
                onChange={(value) => setSelectedTags(value)}
                options={TagList}
              />
            </Form.Item>
          </AppCard>

          <AppCard title='Product Pricing'>
            <Form.Item label='Regular Price' name='mrp'>
              <InputNumber placeholder='Regular Price' addonAfter='$' />
            </Form.Item>
            <Form.Item label='Sale Price' name='salemrp'>
              <InputNumber placeholder='Sale Price' addonAfter='$' />
            </Form.Item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className='mr-10 mb-20'>Tax Inclusive</span>
              <Form.Item name='includeTax' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </div>
            <Form.Item label='Discount %' name='discount'>
              <InputNumber placeholder='Discount %' />
            </Form.Item>
          </AppCard>

          <AppCard
            title='Product Specification'
            extra={
              <Button
                type='primary'
                onClick={() => {
                  setProductSpec([
                    ...productSpec,
                    { id: productSpec.length + 1, title: '', desc: '' },
                  ]);
                }}
              >
                Add New
              </Button>
            }
          >
            <AppRowContainer>
              {productSpec.map((productItem, index) => {
                return (
                  <React.Fragment key={index}>
                    <Col xs={24} sm={12}>
                      <Input
                        className='mb-20'
                        placeholder='Product Label'
                        value={productItem.title}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductSpec = [...productSpec];
                          newProductSpec[index].title = value;
                          setProductSpec(newProductSpec);
                        }}
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <Input
                        className='mb-20'
                        placeholder='Product Value'
                        value={productItem.desc}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductSpec = [...productSpec];
                          newProductSpec[index].desc = value;
                          setProductSpec(newProductSpec);
                        }}
                      />
                    </Col>
                  </React.Fragment>
                );
              })}
            </AppRowContainer>
          </AppCard>

          <AppCard
            title='Product Details'
            extra={
              <Button
                type='primary'
                onClick={() => {
                  setProductInfo([
                    ...productInfo,
                    { id: productInfo.length + 1, title: '', desc: '' },
                  ]);
                }}
              >
                Add New
              </Button>
            }
          >
            <AppRowContainer>
              {productInfo.map((productItem, index) => {
                return (
                  <React.Fragment key={index}>
                    <Col xs={24} sm={12}>
                      <Input
                        className='mb-20'
                        placeholder='Product Label'
                        value={productItem.title}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductInfo = [...productInfo];
                          newProductInfo[index].title = value;
                          setProductInfo(newProductInfo);
                        }}
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <Input
                        className='mb-20'
                        placeholder='Product Value'
                        value={productItem.desc}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductInfo = [...productInfo];
                          newProductInfo[index].desc = value;
                          setProductInfo(newProductInfo);
                        }}
                      />
                    </Col>
                  </React.Fragment>
                );
              })}
            </AppRowContainer>
          </AppCard>
        </StyledFormWrapper>
      </AppScrollbar>
      <Space
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}
      >
        <Button
          style={{
            minWidth: 100,
          }}
          type='primary'
          onClick={() => navigate(-1)}
          ghost
        >
          Cancel
        </Button>

        <Button
          style={{
            display: 'block',
            minWidth: 100,
          }}
          type='primary'
          htmlType='submit'
        >
          {isEdit ? 'Edit' : 'Add'} Product
        </Button>
      </Space>
    </Col>
  );
};

export default BlogSidebar;

BlogSidebar.propTypes = {
  form: PropTypes.any,
  isEdit: PropTypes.bool,
  inStock: PropTypes.bool,
  productInfo: PropTypes.array,
  productSpec: PropTypes.array,
  setProductSpec: PropTypes.func,
  setFieldValue: PropTypes.func,
  setProductInfo: PropTypes.func,
  selectedTags: PropTypes.array,
  setSelectedTags: PropTypes.func,
};
