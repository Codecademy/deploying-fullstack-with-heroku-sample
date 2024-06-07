import React, { useState } from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledSecondaryText,
  StyledSecondaryText1,
  StyledShadowWrapper,
} from '../index.styled';
import PropTypes from 'prop-types';

const General = ({ settings, onUpdateSettings }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Form
      layout='vertical'
      initialValues={settings}
      onFinish={(data) => {
        onUpdateSettings('general', data);
        setIsEdit(false);
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={4}>General Settings</Typography.Title>
          <StyledSecondaryText>
            Manage your general account settings
          </StyledSecondaryText>
        </div>
        <div>
          {!isEdit && (
            <MdEdit
              size={25}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsEdit(true)}
            />
          )}
        </div>
      </div>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Account Info</Typography.Title>
          <StyledSecondaryText1>
            Update your account details.
          </StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Account type' name='accountType'>
                  <Input placeholder='Account type' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Agency Name' name='agencyName'>
                  <Input placeholder='Agency Name' readOnly={!isEdit} />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>System</Typography.Title>
          <StyledSecondaryText1>
            Update your system information.
          </StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Language' name='language'>
                  <Input placeholder='Language' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Date Format' name='dateFormat'>
                  <Input placeholder='Date Format' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Default Currency' name='currency'>
                  <Input placeholder='Default Currency' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Decimal Separator' name='decimalSeparator'>
                  <Input placeholder='Decimal Separator' readOnly={!isEdit} />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Address</Typography.Title>
          <StyledSecondaryText1>
            Update your address details.
          </StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24}>
                <Form.Item label='Street/Number' name='street'>
                  <Input placeholder='Street/Number' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Zip Code' name='zipCode'>
                  <Input placeholder='Zip Code' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='City' name='city'>
                  <Input placeholder='City' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='State' name='state'>
                  <Input placeholder='State' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Country' name='country'>
                  <Input placeholder='Country' readOnly={!isEdit} />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Contact info</Typography.Title>
          <StyledSecondaryText1>
            Update your contact details.
          </StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Phone Number' name='phoneNumber'>
                  <Input placeholder='Phone Number' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Alternate Number' name='alternateNumber'>
                  <Input placeholder='Alternate Number' readOnly={!isEdit} />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      {isEdit && (
        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={() => setIsEdit(false)}>Cancel</Button>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </Space>
      )}
    </Form>
  );
};

General.propTypes = {
  settings: PropTypes.object,
  onUpdateSettings: PropTypes.func,
};
export default General;
