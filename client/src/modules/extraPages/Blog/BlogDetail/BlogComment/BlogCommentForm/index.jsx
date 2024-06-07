import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import dayjs from 'dayjs';
import { StyledFormWrapper } from '../index.styled';
import { useIntl } from 'react-intl';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const BlogCommentForm = ({ comments, setComments }) => {
  const user = useAuthUser();
  const { messages } = useIntl();

  const onCommentSend = (data) => {
    const item = {
      id: generateRandomUniqueNumber(),
      name: data.name,
      image: user.photoURL,
      duration: dayjs().format('MMM DD'),
      comment: data.comment,
    };
    const newList = comments.concat(item);
    setComments(newList);
  };

  return (
    <Form
      initialValues={{
        name: '',
        email: '',
        comment: '',
      }}
      onFinish={onCommentSend}
    >
      <StyledFormWrapper>
        <AppRowContainer>
          <Col xs={24} md={12}>
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: messages['validation.nameRequired'],
                },
              ]}
            >
              <Input placeholder={messages['common.fullName']} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              type='email'
              name='email'
              rules={[
                {
                  required: true,
                  message: messages['validation.emailFormat'],
                },
              ]}
            >
              <Input placeholder={messages['common.email']} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              name='comment'
              rules={[
                {
                  required: true,
                  message: messages['validation.comment'],
                },
              ]}
            >
              <TextArea rows='3' placeholder={messages['common.comments']} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Button
              style={{
                position: 'relative',
                minWidth: 100,
              }}
              type='primary'
              htmlType='submit'
            >
              {messages['common.postComment']}
            </Button>
          </Col>
        </AppRowContainer>
      </StyledFormWrapper>
    </Form>
  );
};

BlogCommentForm.propTypes = {
  comments: PropTypes.array,
  setComments: PropTypes.func,
};
export default BlogCommentForm;
