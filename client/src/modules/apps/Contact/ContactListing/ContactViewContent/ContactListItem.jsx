import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ItemMenu from './ItemMenu';
import AppsStarredIcon from '@crema/components/AppsStarredIcon';
import { Avatar, Checkbox } from 'antd';
import ActionBtnHover from './ActionBtnHover';
import {
  StyledContactListExportIcon,
  StyledContactListItem,
  StyledContactListItemAction,
  StyledContactListItemAvatar,
  StyledContactListItemAvatarView,
  StyledContactListItemCheckView,
  StyledContactListItemCol,
  StyledContactListItemCompany,
  StyledContactListItemMail,
  StyledContactListItemMenuView,
  StyledContactListItemTitle,
} from '../index.styled';

const ContactListItem = ({
  contact,
  labelList,
  onChangeCheckedContacts,
  checkedContacts,
  onChangeStarred,
  onSelectContactsForDelete,
  onViewContactDetail,
  onOpenEditContact,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onGetLabelColor = (labelId) => {
    if (labelId) {
      return (
        labelList?.length > 0 &&
        labelList?.find((label) => label.id === labelId).color
      );
    }
  };

  return (
    <StyledContactListItem
      key={contact.id}
      className={clsx('item-hover', {
        rootCheck: checkedContacts.includes(contact.id),
      })}
      onClick={() => onViewContactDetail(contact)}
    >
      <StyledContactListItemCheckView
        onClick={(event) => event.stopPropagation()}
      >
        <Checkbox
          checked={checkedContacts.includes(contact.id)}
          onChange={() => {
            setIsChecked(!isChecked);
            onChangeCheckedContacts(!isChecked, contact.id);
          }}
          color='primary'
        />
      </StyledContactListItemCheckView>
      <StyledContactListItemCheckView
        onClick={(event) => event.stopPropagation()}
      >
        <AppsStarredIcon item={contact} onChange={onChangeStarred} />
      </StyledContactListItemCheckView>
      <StyledContactListItemAvatarView>
        {contact.image ? (
          <Avatar size={36} src={contact.image} />
        ) : (
          <StyledContactListItemAvatar size={36}>
            {contact.name[0].toUpperCase()}
          </StyledContactListItemAvatar>
        )}
      </StyledContactListItemAvatarView>
      <StyledContactListItemTitle className='text-truncate'>
        {contact.name}
      </StyledContactListItemTitle>

      <StyledContactListItemMail className='text-truncate'>
        <span className='text-truncate'>
          {contact.email ? contact.email : null}
        </span>
      </StyledContactListItemMail>
      <StyledContactListItemCol className='text-truncate'>
        <span className='text-truncate'>{contact.contact}</span>
      </StyledContactListItemCol>
      <StyledContactListItemCompany className='text-truncate contact-list-item-company'>
        <span className='text-truncate'>
          {contact.company ? contact.company : null}
        </span>
      </StyledContactListItemCompany>

      <StyledContactListItemAction className='contact-list-item-action'>
        <StyledContactListExportIcon
          style={{ color: onGetLabelColor(contact.label) }}
        />

        <StyledContactListItemMenuView
          onClick={(event) => event.stopPropagation()}
        >
          <ItemMenu
            onSelectContactsForDelete={onSelectContactsForDelete}
            contact={contact}
            onChangeStarred={onChangeStarred}
            onOpenEditContact={onOpenEditContact}
          />
        </StyledContactListItemMenuView>
      </StyledContactListItemAction>

      <ActionBtnHover
        contact={contact}
        onChangeStarred={onChangeStarred}
        onSelectContactsForDelete={onSelectContactsForDelete}
        onOpenEditContact={onOpenEditContact}
      />
    </StyledContactListItem>
  );
};

export default ContactListItem;

ContactListItem.defaultProps = {
  labelList: [],
  checkedContacts: [],
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  onChangeCheckedContacts: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
