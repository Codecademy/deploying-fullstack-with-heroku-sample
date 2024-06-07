import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Avatar, Button, Col, Form, Input, Select } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import {
  StyledMultiSelect,
  StyledMultiSelectName,
  StyledScrumBoardAddCardForm,
  StyledScrumBoardAddCardFormContent,
  StyledScrumBoardAddCardFormFooter,
  StyledScrumBoardDatePicker,
  StyledScrumBoardScrollbar,
} from './index.styled';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import CardAttachments from './CardAttachments';
import CardCheckedList from './CardCheckedList';
import CardComments from './CardComments';

import { useScrumContext } from '../../../../context/ScrumContextProvider';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';
import { getDateObject } from '@crema/helpers/DateHelper';

const { Option } = Select;
const { TextArea } = Input;

const AddCardForm = (props) => {
  const {
    board,
    list,
    checkedList,
    setCheckedList,
    comments,
    handleCancel,
    setSelectedLabels,
    setComments,
    authUser,
    attachments,
    setAttachments,
    selectedLabels,
    selectedMembers,
    setMembersList,
    selectedCard,
    onCloseAddCard,
    isSubmitting,
    setData,
  } = props;

  const { messages } = useIntl();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { labelList, memberList } = useScrumContext();

  console.log('board, list: ', board, list);
  const onDeleteCheckedItem = (id) => {
    const updatedList = checkedList.filter((item) => item.id !== id);
    setCheckedList(updatedList);
  };

  const onAddNewCheckedItem = () => {
    const item = {
      id: generateRandomUniqueNumber(),
      title: '',
    };
    const updatedList = checkedList.concat(item);
    setCheckedList(updatedList);
  };

  const onSetCheckedItemText = (title, id) => {
    const updatedList = checkedList.map((item) => {
      if (item.id === id) {
        item.title = title;
        return item;
      } else {
        return item;
      }
    });
    setCheckedList(updatedList);
  };

  const onAddNewComment = (comment) => {
    setComments(
      comments.concat({
        comment: comment,
        sender: {
          id: authUser.id,
          name: authUser.displayName ? authUser.displayName : 'User',
          image: authUser.photoURL,
        },
        date: dayjs().format('MMM DD'),
      }),
    );
  };

  const onDeleteAttachment = (id) => {
    const updatedAttachments = attachments.filter(
      (attachment) => attachment.id !== id,
    );
    setAttachments(updatedAttachments);
  };

  const onFinish = (values) => {
    console.log('values', values);
    if (selectedCard) {
      const editedCard = {
        ...selectedCard,
        comments: comments,
        ...values,
        attachments: attachments,
        members: selectedMembers,
        label: selectedLabels,
        checkedList: checkedList.filter((item) => item.title !== ''),
      };
      putDataApi('/api/scrumboard/edit/card', infoViewActionsContext, {
        board,
        list,
        card: editedCard,
      })
        .then((data) => {
          setData(data);
          handleCancel();
          infoViewActionsContext.showMessage('Card Edited Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      const newCard = {
        id: generateRandomUniqueNumber(),
        attachments: attachments,
        checkedList: [],
        comments: comments,
        ...values,
        label: selectedLabels,
        members: selectedMembers,
      };
      postDataApi('/api/scrumboard/add/card', infoViewActionsContext, {
        board,
        list,
        card: newCard,
      })
        .then((data) => {
          setData(data);
          handleCancel();
          infoViewActionsContext.showMessage('Card Added Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const updateLabelList = (values) => {
    setSelectedLabels(labelList.filter((label) => values.includes(label.id)));
  };

  const updateMemberList = (values) => {
    setMembersList(memberList.filter((member) => values.includes(member.id)));
  };

  return (
    <StyledScrumBoardAddCardForm
      noValidate
      autoComplete='off'
      initialValues={{
        title: selectedCard?.title,
        desc: selectedCard?.desc,
        date:
          selectedCard && selectedCard.date
            ? getDateObject(selectedCard.date)
            : '',
        label: selectedCard?.label.map((data) => data.id),
        members: selectedCard?.members.map((data) => data.id),
      }}
      onFinish={onFinish}
    >
      <StyledScrumBoardScrollbar>
        <StyledScrumBoardAddCardFormContent>
          <AppRowContainer>
            <Col xs={24} md={16}>
              <Form.Item name='title'>
                <Input placeholder={messages['common.title']} />
              </Form.Item>
            </Col>

            <Col xs={24} md={8}>
              <Form.Item name='date'>
                <StyledScrumBoardDatePicker />
              </Form.Item>
            </Col>
          </AppRowContainer>

          <Form.Item name='desc'>
            <TextArea
              autoSize={{ minRows: 3, maxRows: 5 }}
              placeholder={messages['common.description']}
            />
          </Form.Item>

          <AppRowContainer>
            <Col xs={24} lg={12}>
              <Form.Item name='label'>
                <Select
                  mode='multiple'
                  allowClear
                  maxTagCount={3}
                  style={{ width: '100%' }}
                  placeholder='Please select Label'
                  onChange={(value) => updateLabelList(value)}
                >
                  {labelList.map((label) => (
                    <Option key={label.id} value={label.id}>
                      {label.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item name='members'>
                <Select
                  mode='multiple'
                  maxTagCount={2}
                  placeholder='Please select Members'
                  onChange={(value) => updateMemberList(value)}
                >
                  {memberList.map((member) => (
                    <Option key={member.id} value={member.id}>
                      <StyledMultiSelect>
                        {member.image ? (
                          <Avatar src={member.image} />
                        ) : (
                          <Avatar>{member.name.toUpperCase()}</Avatar>
                        )}
                        <StyledMultiSelectName>
                          {member.name}
                        </StyledMultiSelectName>
                      </StyledMultiSelect>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </AppRowContainer>

          <CardAttachments
            attachments={attachments}
            onDeleteAttachment={onDeleteAttachment}
          />

          {selectedCard ? (
            <CardCheckedList
              onAddNewCheckedItem={onAddNewCheckedItem}
              checkedList={checkedList}
              onDeleteCheckedItem={onDeleteCheckedItem}
              onSetCheckedItemText={onSetCheckedItemText}
            />
          ) : null}

          <CardComments comments={comments} onAddNewComment={onAddNewComment} />
        </StyledScrumBoardAddCardFormContent>
      </StyledScrumBoardScrollbar>
      <StyledScrumBoardAddCardFormFooter>
        <Button type='primary' ghost onClick={onCloseAddCard}>
          <IntlMessages id='common.cancel' />
        </Button>
        <Button type='primary' disabled={isSubmitting} htmlType='submit'>
          <IntlMessages id='common.done' />
        </Button>
      </StyledScrumBoardAddCardFormFooter>
    </StyledScrumBoardAddCardForm>
  );
};

export default AddCardForm;

AddCardForm.defaultProps = {
  comments: [],
  attachments: [],
  selectedLabels: [],
  selectedMembers: [],
  isSubmitting: false,
};

AddCardForm.propTypes = {
  board: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
  checkedList: PropTypes.array.isRequired,
  setCheckedList: PropTypes.func,
  comments: PropTypes.array,
  setComments: PropTypes.func,
  authUser: PropTypes.object.isRequired,
  attachments: PropTypes.array,
  setAttachments: PropTypes.func,
  handleCancel: PropTypes.func,
  selectedLabels: PropTypes.array,
  setSelectedLabels: PropTypes.func,
  selectedMembers: PropTypes.array,
  setMembersList: PropTypes.func,
  onCloseAddCard: PropTypes.func,
  setData: PropTypes.func,
  selectedCard: PropTypes.object,
  isSubmitting: PropTypes.bool,
};
