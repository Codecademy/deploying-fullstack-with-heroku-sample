import React from 'react';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import AppGrid from '@crema/components/AppGrid';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import ContactListSkeleton from '@crema/components/AppSkeleton/ContactListSkeleton';
import { AppAnimates } from '@crema/constants/AppEnums';
import {
  StyledContactGridView,
  StyledContactListDesktop,
  StyledContactListMobile,
} from '../index.styled';
import { useIntl } from 'react-intl';

import ContactGridItem from './ContactGridItem';
import ContactListItem from './ContactListItem';
import ContactListItemMobile from './ContactListItemMobile';
import { useContactContext } from '../../../context/ContactContextProvider';

const ContactViewContent = (props) => {
  const {
    list,
    handleAddContactOpen,
    onChangeStarred,
    onChangeCheckedContacts,
    checkedContacts,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;
  const { pageView, loading, labelList } = useContactContext();

  const { messages } = useIntl();
  return pageView === 'list' ? (
    <>
      <StyledContactListDesktop>
        <AppList
          data={list}
          animation={AppAnimates.SLIDEUPIN}
          ListEmptyComponent={
            <ListEmptyResult
              loading={loading}
              actionTitle={messages['contactApp.createContact']}
              onClick={handleAddContactOpen}
              placeholder={<ContactListSkeleton />}
            />
          }
          renderItem={(contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              labelList={labelList}
              onChangeCheckedContacts={onChangeCheckedContacts}
              checkedContacts={checkedContacts}
              onSelectContactsForDelete={onSelectContactsForDelete}
              onChangeStarred={onChangeStarred}
              onViewContactDetail={onViewContactDetail}
              onOpenEditContact={onOpenEditContact}
            />
          )}
        />
      </StyledContactListDesktop>
      <StyledContactListMobile>
        <AppList
          data={list}
          animation={AppAnimates.SLIDEUPIN}
          ListEmptyComponent={
            <ListEmptyResult
              loading={loading}
              actionTitle={messages['contactApp.createContact']}
              onClick={handleAddContactOpen}
              placeholder={<ContactListSkeleton />}
            />
          }
          renderItem={(contact) => (
            <ContactListItemMobile
              key={contact.id}
              contact={contact}
              labelList={labelList}
              checkedContacts={checkedContacts}
              onChangeStarred={onChangeStarred}
              onViewContactDetail={onViewContactDetail}
              onChangeCheckedContacts={onChangeCheckedContacts}
            />
          )}
        />
      </StyledContactListMobile>
    </>
  ) : (
    <StyledContactGridView>
      <AppGrid
        responsive={{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 3,
        }}
        data={list}
        renderItem={(contact) => (
          <ContactGridItem
            key={contact.id}
            contact={contact}
            labelList={labelList}
            onChangeCheckedContacts={onChangeCheckedContacts}
            checkedContacts={checkedContacts}
            onChangeStarred={onChangeStarred}
            onSelectContactsForDelete={onSelectContactsForDelete}
            onViewContactDetail={onViewContactDetail}
            onOpenEditContact={onOpenEditContact}
          />
        )}
      />
    </StyledContactGridView>
  );
};

export default ContactViewContent;

ContactViewContent.defaultProps = {
  list: [],
  checkedContacts: [],
};

ContactViewContent.propTypes = {
  list: PropTypes.array,
  checkedContacts: PropTypes.array,
  onChangeCheckedContacts: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  handleAddContactOpen: PropTypes.func,
};
