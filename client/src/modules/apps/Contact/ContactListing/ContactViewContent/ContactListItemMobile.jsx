import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppsStarredIcon from '@crema/components/AppsStarredIcon';
import { Avatar } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {
  StyledContactListContentMobileItem,
  StyledContactListExportMobileIcon,
  StyledContactListItemActionMobile,
  StyledContactListItemAvatar,
  StyledContactListItemAvatarView,
  StyledContactListItemContentMobile,
  StyledContactListItemMobile,
  StyledContactListMainContent,
  StyledContactListMobileAvatarView,
  StyledContactListStarMobile,
} from '../index.styled';

const ContactListItemMobile = ({
  contact,
  labelList,
  checkedContacts,
  onChangeStarred,
  onViewContactDetail,
  onChangeCheckedContacts,
}) => {
  const onGetLabelColor = (labelId) => {
    if (labelId) {
      return (
        labelList.length > 0 &&
        labelList.find((label) => label.id === labelId).color
      );
    }
  };

  return (
    <>
      <StyledContactListItemMobile
        key={contact.id}
        className={clsx('item-hover', {
          rootCheck: checkedContacts.includes(contact.id),
        })}
        onClick={() => onViewContactDetail(contact)}
      >
        <StyledContactListMainContent>
          <StyledContactListMobileAvatarView
            className={clsx({
              checked: checkedContacts.includes(contact.id),
            })}
            onClick={(event) => {
              event.stopPropagation();
              onChangeCheckedContacts(
                !checkedContacts.includes(contact.id),
                contact.id,
              );
            }}
          >
            {checkedContacts.includes(contact.id) ? (
              <CheckOutlined />
            ) : (
              <StyledContactListItemAvatarView>
                {contact.image ? (
                  <Avatar size={36} src={contact.image} />
                ) : (
                  <StyledContactListItemAvatar size={36}>
                    {contact.name[0].toUpperCase()}
                  </StyledContactListItemAvatar>
                )}
              </StyledContactListItemAvatarView>
            )}
          </StyledContactListMobileAvatarView>

          <StyledContactListItemContentMobile>
            <StyledContactListContentMobileItem className='text-truncate'>
              {contact.name}
            </StyledContactListContentMobileItem>

            <span className='text-truncate'>{contact.contact}</span>
          </StyledContactListItemContentMobile>
        </StyledContactListMainContent>
        <StyledContactListItemActionMobile>
          <StyledContactListExportMobileIcon
            style={{ color: onGetLabelColor(contact.label) }}
          />

          <StyledContactListStarMobile
            onClick={(event) => event.stopPropagation()}
          >
            <AppsStarredIcon item={contact} onChange={onChangeStarred} />
          </StyledContactListStarMobile>
        </StyledContactListItemActionMobile>
      </StyledContactListItemMobile>
    </>
  );
};

export default ContactListItemMobile;

ContactListItemMobile.defaultProps = {
  labelList: [],
  checkedContacts: [],
};

ContactListItemMobile.propTypes = {
  contact: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  onChangeCheckedContacts: PropTypes.func,
};
