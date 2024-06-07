import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppsSideBarFolderItem from '@crema/components/AppsSideBarFolderItem';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/components/AppSkeleton/SidebarListSkeleton';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import {
  StyledPlusOutlined,
  StyledSidebarHeader,
  StyledSidebarList,
  StyledSidebarScrollbar,
} from './index.styled';

const TaskSideBar = () => {
  const navigate = useNavigate();
  const [{ apiData: folderList }] = useGetDataApi(
    '/api/invoice/folders/list',
    [],
    {},
    true,
  );

  return (
    <>
      <StyledSidebarHeader>
        <Button
          ghost
          type='primary'
          icon={<StyledPlusOutlined style={{ marginRight: 8 }} />}
          onClick={() => navigate('/invoice/add')}
        >
          <IntlMessages id='invoice.addNewInvoice' />
        </Button>
      </StyledSidebarHeader>

      <StyledSidebarScrollbar>
        <StyledSidebarList>
          <AppList
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
                path={`/invoice/invoices/${item.alias}`}
              />
            )}
          />
        </StyledSidebarList>
      </StyledSidebarScrollbar>
    </>
  );
};

export default TaskSideBar;
