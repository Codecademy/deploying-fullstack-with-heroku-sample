import React, { useEffect, useState } from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { useDropzone } from 'react-dropzone';
import { Button, Col, Divider, Form, Input, Space, Typography } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledSecondaryText,
  StyledSecondaryText1,
  StyledShadowWrapper,
} from '../index.styled';
import PropTypes from 'prop-types';

const Invoicing = ({ settings, onUpdateSettings }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const dropzone = useDropzone({
    accept: {
      'image/png': ['.png', '.jpeg', '.jpg'],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  useEffect(() => {
    setUploadedFiles([{ preview: settings.logo }]);
  }, [settings]);

  return (
    <Form
      layout='vertical'
      initialValues={settings}
      onFinish={(data) => {
        onUpdateSettings('invoicing', data);
        setIsEdit(false);
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={4}>Invoicing Settings</Typography.Title>
          <StyledSecondaryText>
            Manage your invoicing settings
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
          <Typography.Title level={5}>General Info</Typography.Title>
          <StyledSecondaryText1>
            View/Edit your general invoicing settings.
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
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer style={{ marginTop: 4, marginBottom: 4 }}>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Logo</Typography.Title>
          <StyledSecondaryText1>Set a logo</StyledSecondaryText1>
        </Col>

        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            {isEdit ? (
              <div
                style={{ cursor: 'pointer', width: 'fit-content' }}
                {...dropzone.getRootProps({ className: 'dropzone' })}
              >
                <input {...dropzone.getInputProps()} />
                <img
                  src={uploadedFiles?.[0]?.preview || settings.logo}
                  alt='logo'
                  style={{ width: 40, height: 'auto' }}
                />
              </div>
            ) : (
              <img
                src={uploadedFiles?.[0]?.preview || settings.logo}
                alt='logo'
                style={{ width: 40, height: 'auto' }}
              />
            )}
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Invoice Recipient</Typography.Title>
          <StyledSecondaryText1>
            Set your invoicing recipient
          </StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Client & Recipient Name' name='clientName'>
                  <Input
                    placeholder='Client & Recipient Name'
                    readOnly={!isEdit}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Email' name='email'>
                  <Input type='email' placeholder='Email' readOnly={!isEdit} />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Additional Text</Typography.Title>
          <StyledSecondaryText1>Set introduction text.</StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24}>
                <Form.Item label='Introduction Text' name='introductionText'>
                  <Input placeholder='Introduction Text' readOnly={!isEdit} />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Tax Rates</Typography.Title>
          <StyledSecondaryText1> Update your tax rates.</StyledSecondaryText1>
        </Col>

        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Tax Type' name='taxType'>
                  <Input placeholder='Tax Type' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Tax Value' name='taxValue'>
                  <Input placeholder='Tax Value' readOnly={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Concluding Text' name='concludingText'>
                  <Input placeholder='Concluding Text' readOnly={!isEdit} />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Payment Deadline</Typography.Title>
          <StyledSecondaryText1>Set your payment deadline</StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Payment Deadline' name='paymentDeadline'>
                  <Input placeholder='Payment Deadline' readOnly={!isEdit} />
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

Invoicing.propTypes = {
  settings: PropTypes.object,
  onUpdateSettings: PropTypes.func,
};
export default Invoicing;
