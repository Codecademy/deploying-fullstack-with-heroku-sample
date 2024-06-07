import React, { useState } from 'react';
import { Button, Col, Form, Input } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import { useDropzone } from 'react-dropzone';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import {
  StyledInfoUpload,
  StyledInfoUploadAvatar,
  StyledInfoUploadBtnView,
  StyledInfoUploadContent,
} from './index.styled';
import { StyledUserProfileGroupBtn } from '../index.styled';

const PersonalInfo = () => {
  const { user } = useAuthUser();

  const [userImage, setUserImage] = useState('/assets/images/placeholder.jpg');

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const onReset = () => {
    setUserImage('/assets/images/placeholder.jpg');
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        ...user,
        userImage: user.photoURL
          ? user.photoURL
          : '/assets/images/placeholder.jpg',
      }}
    >
      <StyledInfoUpload>
        <StyledInfoUploadAvatar src={userImage} />

        <StyledInfoUploadContent>
          <StyledInfoUploadBtnView>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <label htmlFor='icon-button-file'>
                <Button type='primary'>Upload</Button>
              </label>
            </div>
            <Button onClick={onReset}>Reset</Button>
          </StyledInfoUploadBtnView>
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </StyledInfoUploadContent>
      </StyledInfoUpload>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name='displayName'
            rules={[
              { required: true, message: 'Please input your Full Name!' },
            ]}
          >
            <Input placeholder='Full Name' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name='username'
            rules={[
              { required: true, message: 'Please input your User Name!' },
            ]}
          >
            <Input placeholder='User Name' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name='email'
            rules={[
              { required: true, message: 'Please input your e-mail address!' },
            ]}
          >
            <Input type='text' placeholder='E-mail' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name='company'
            rules={[{ required: true, message: 'Please input your company!' }]}
          >
            <Input type='text' placeholder='Company' />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className='user-profile-group-btn'
          >
            <Button type='primary' htmlType='submit'>
              Save Changes
            </Button>
            <Button htmlType='cancel'>Cancel</Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default PersonalInfo;
