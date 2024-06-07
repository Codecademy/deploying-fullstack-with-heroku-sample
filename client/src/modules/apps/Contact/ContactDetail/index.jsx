import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

import AppRowContainer from '@crema/components/AppRowContainer';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledContactDetailContent,
  StyledContactDetailModal,
  StyledContactDetailScrollbar,
  StyledContactModalHeader,
  StyledContactModalUser,
  StyledContactModalUserAvatar,
} from './index.styled';
import {
  StyledContactFormBtn,
  StyledContactFormFooter,
} from '../CreateContact/index.styled';
import ContactActions from './ContactActions';
import PersonalDetails from './PersonalDetails';
import OtherDetails from './OtherDetails';

const ContactDetail = (props) => {
  const {
    isShowDetail,
    selectedContact,
    onShowDetail,
    onSelectContactsForDelete,
    onOpenEditContact,
    onChangeStarred,
  } = props;

  const [contact, setContact] = useState(selectedContact);

  useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
    onShowDetail(false);
  };

  const onContactDetailClose = () => {
    onShowDetail(false);
  };

  return (
    <StyledContactDetailModal
      open={isShowDetail}
      onOk={isShowDetail}
      footer={false}
      onCancel={() => onShowDetail(false)}
    >
      <StyledContactModalHeader>
        <ContactActions
          onChangeStarred={onChangeStarred}
          onDeleteContact={onDeleteContact}
          onOpenEditContact={onOpenEditContact}
          contact={contact}
        />
        <StyledContactModalUser>
          {contact.image ? (
            <StyledContactModalUserAvatar src={contact.image} />
          ) : (
            <StyledContactModalUserAvatar>
              {contact.name[0].toUpperCase()}
            </StyledContactModalUserAvatar>
          )}
          <h4>{contact.name}</h4>
        </StyledContactModalUser>
      </StyledContactModalHeader>

      <StyledContactDetailScrollbar>
        <StyledContactDetailContent>
          <AppRowContainer>
            <Col xs={24} md={12}>
              <PersonalDetails contact={contact} />
            </Col>
            <Col xs={24} md={12}>
              <OtherDetails contact={contact} />
            </Col>
          </AppRowContainer>
        </StyledContactDetailContent>

        <StyledContactFormFooter>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={onContactDetailClose}
          >
            <IntlMessages id='common.cancel' />
          </StyledContactFormBtn>
        </StyledContactFormFooter>
      </StyledContactDetailScrollbar>
    </StyledContactDetailModal>
  );
};

export default ContactDetail;

ContactDetail.propTypes = {
  isShowDetail: PropTypes.bool.isRequired,
  onShowDetail: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onChangeStarred: PropTypes.func,
};
