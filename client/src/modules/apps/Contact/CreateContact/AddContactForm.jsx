import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { DatePicker, Form, Input, Select } from 'antd';
import dayjs from 'dayjs';
import {
  StyledContactForm,
  StyledContactFormAvatar,
  StyledContactFormBtn,
  StyledContactFormContent,
  StyledContactFormContentField,
  StyledContactFormContentItem,
  StyledContactFormFooter,
  StyledContactFormHeader,
  StyledContactFormHeaderTitle,
  StyledContactFormItemTitle,
  StyledContactModalScrollbar,
} from './index.styled';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { useContactContext } from '../../context/ContactContextProvider';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

const AddContactForm = (props) => {
  const {
    userImage,
    selectContact,
    setUserImage,
    handleAddContactClose,
    onUpdateContact,
    reCallAPI,
  } = props;
  const { labelList } = useContactContext();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      '.pdf': [],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const { messages } = useIntl();

  const { Option } = Select;

  const onFinish = (values) => {
    if (values.birthday)
      values.birthday = dayjs(values.birthday).format('DD-MM-YYYY');
    if (selectContact) {
      const newContact = {
        id: selectContact.id,
        isStarred: selectContact.isStarred,
        isFrequent: selectContact.isFrequent,
        image: userImage,
        ...values,
      };
      putDataApi('/api/contactApp/contact/', infoViewActionsContext, {
        contact: newContact,
      })
        .then(() => {
          reCallAPI();
          infoViewActionsContext.showMessage('Contact updated successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });

      if (onUpdateContact) onUpdateContact(newContact);
    } else {
      const newContact = {
        id: generateRandomUniqueNumber(),
        isStarred: false,
        isFrequent: Math.random() > 0.5,
        image: userImage,
        ...values,
      };

      postDataApi('/api/contactApp/compose', infoViewActionsContext, {
        contact: newContact,
      })
        .then(() => {
          reCallAPI();
          infoViewActionsContext.showMessage('Contact created successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });

      handleAddContactClose();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  console.log('selectContact: ', selectContact);
  return (
    <StyledContactForm
      name='basic'
      initialValues={
        selectContact
          ? {
              ...selectContact,
              birthday: selectContact.birthday
                ? dayjs(selectContact.birthday, 'MMM DD,YYYY')
                : '',
            }
          : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledContactFormHeader>
        <Form.Item {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            <StyledContactFormAvatar src={userImage} />
          </label>
        </Form.Item>
        {selectContact ? (
          <StyledContactFormHeaderTitle>
            {selectContact.name}
          </StyledContactFormHeaderTitle>
        ) : null}
      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id='contactApp.personalDetails' />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item
                className='form-field'
                name='name'
                rules={[{ required: true, message: 'Please input your Name!' }]}
              >
                <Input placeholder={messages['common.name']} />
              </Form.Item>

              <Form.Item className='form-field' name='email'>
                <Input placeholder={messages['common.email']} />
              </Form.Item>

              <Form.Item
                className='form-field'
                name='contact'
                rules={[
                  { required: true, message: 'Please input your Phone!' },
                ]}
              >
                <Input placeholder={messages['common.phone']} />
              </Form.Item>

              <Form.Item className='form-field' name='birthday'>
                <DatePicker />
              </Form.Item>

              <Form.Item className='form-field' name='label'>
                <Select placeholder='Select Label'>
                  {labelList.map((label) => {
                    return (
                      <Option value={label.id} key={label.id}>
                        {label.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item className='form-field' name='website'>
                <Input placeholder={messages['common.website']} />
              </Form.Item>
            </StyledContactFormContentField>
          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id='common.otherDetails' />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item className='form-field' name='company'>
                <Input placeholder={messages['common.company']} />
              </Form.Item>

              <Form.Item className='form-field' name='address'>
                <Input placeholder={messages['common.address']} />
              </Form.Item>
            </StyledContactFormContentField>
          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id='common.socialMedia' />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item className='form-field' name='facebookId'>
                <Input placeholder={messages['common.facebookId']} />
              </Form.Item>

              <Form.Item className='form-field' name='twitterId'>
                <Input placeholder={messages['common.twitterId']} />
              </Form.Item>
            </StyledContactFormContentField>
          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id='common.notes' />
            </StyledContactFormItemTitle>

            <Form.Item className='form-field' name='notes'>
              <Input.TextArea placeholder={messages['common.notes']} />
            </Form.Item>
          </StyledContactFormContentItem>
        </StyledContactFormContent>

        <StyledContactFormFooter>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={handleAddContactClose}
          >
            <IntlMessages id='common.cancel' />
          </StyledContactFormBtn>
          <StyledContactFormBtn type='primary' htmlType='submit'>
            <IntlMessages id='common.save' />
          </StyledContactFormBtn>
        </StyledContactFormFooter>
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default AddContactForm;

AddContactForm.propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddContactClose: PropTypes.func,
  reCallAPI: PropTypes.func,
  selectContact: PropTypes.object,
  onUpdateContact: PropTypes.any,
};
