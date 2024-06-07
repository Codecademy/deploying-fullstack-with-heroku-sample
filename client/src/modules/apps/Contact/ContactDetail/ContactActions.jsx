import React from 'react';
import PropTypes from 'prop-types';
import AppsStarredIcon from '@crema/components/AppsStarredIcon';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import AppIconButton from '@crema/components/AppIconButton';
import { StyledContactAction, StyledContactActionHover } from './index.styled';

const ContactActions = (props) => {
  const { onDeleteContact, onChangeStarred, onOpenEditContact, contact } =
    props;

  return (
    <StyledContactAction>
      <StyledContactActionHover className='contact-action-hover'>
        <AppIconButton
          icon={<AiOutlineEdit />}
          onClick={() => onOpenEditContact(contact)}
        />
        <AppsStarredIcon item={contact} onChange={onChangeStarred} />
      </StyledContactActionHover>
      <AppIconButton icon={<AiOutlineDelete />} onClick={onDeleteContact} />
    </StyledContactAction>
  );
};

export default ContactActions;

ContactActions.propTypes = {
  onDeleteContact: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
