import React, { useState } from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import CreateContact from '../CreateContact';
import AppsSideBarFolderItem from '@crema/components/AppsSideBarFolderItem';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/components/AppSkeleton/SidebarListSkeleton';
import { Button } from 'antd';
import { AppAnimates } from '@crema/constants/AppEnums';
import { PlusOutlined } from '@ant-design/icons';
import {
  StyledContactSidebarContent,
  StyledContactSidebarHeader,
  StyledContactSidebarList,
  StyledContactSidebarScroll,
  StyledContactSidebarTitle,
} from './index.styled';
import ContactListLabelItem from './LabelItem';
import { useContactContext } from '../../context/ContactContextProvider';

const SideBarContent = () => {
  const { folderList, labelList } = useContactContext();

  const [isAddContact, onSetIsAddContact] = useState(false);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  return (
    <>
      <StyledContactSidebarHeader>
        <Button
          ghost
          type='primary'
          icon={<PlusOutlined style={{ marginRight: 8 }} />}
          onClick={handleAddContactOpen}
        >
          <IntlMessages id='contactApp.createContact' />
        </Button>
      </StyledContactSidebarHeader>

      <StyledContactSidebarScroll>
        <StyledContactSidebarContent>
          <StyledContactSidebarList>
            <AppList
              animation={AppAnimates.SLIDELEFTIN}
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/contact/folder/${item.alias}`}
                />
              )}
            />
          </StyledContactSidebarList>

          <StyledContactSidebarTitle>
            <IntlMessages id='common.labels' />
          </StyledContactSidebarTitle>

          <AppList
            animation={AppAnimates.SLIDELEFTIN}
            data={labelList}
            ListEmptyComponent={
              <ListEmptyResult
                loading={true}
                placeholder={<SidebarPlaceholder />}
              />
            }
            renderItem={(label) => (
              <ContactListLabelItem key={label.id} label={label} />
            )}
          />

          {isAddContact ? (
            <CreateContact
              isAddContact={isAddContact}
              handleAddContactClose={handleAddContactClose}
            />
          ) : null}
        </StyledContactSidebarContent>
      </StyledContactSidebarScroll>
    </>
  );
};

export default SideBarContent;
