import { useState } from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import ComposeMail from "../ComposeMail";
import AppsSideBarFolderItem from "@crema/components/AppsSideBarFolderItem";
import AppList from "@crema/components/AppList";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import SidebarPlaceholder from "@crema/components/AppSkeleton/SidebarListSkeleton";
import { Button, List } from "antd";
import {
  StyledMailSidebarContent,
  StyledMailSidebarHeader,
  StyledMailSidebarList,
  StyledMailSidebarScrollbar,
  StyledMailSidebarTitle,
  StyledPlusOutlined,
} from "./index.styled";
import ConnectionListItem from "./ConnectionListItem";
import LabelItem from "./LabelItem";
import { useMailContext } from "../../context/MailContextProvider";

const MailSidebar = () => {
  const { connectionList, labelList, folderList } = useMailContext();

  const [isComposeMail, setComposeMail] = useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  return (
    <>
      {labelList || connectionList || folderList ? (
        <>
          <StyledMailSidebarHeader>
            <Button
              ghost
              type="primary"
              icon={<StyledPlusOutlined style={{ marginRight: 8 }} />}
              onClick={onOpenComposeMail}
            >
              <IntlMessages id="common.compose" />
            </Button>
          </StyledMailSidebarHeader>

          <StyledMailSidebarScrollbar>
            <StyledMailSidebarContent>
              <StyledMailSidebarList
                component="nav"
                aria-label="main mailbox folders"
              >
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
                      path={`/apps/mail/folder/${item.alias}`}
                    />
                  )}
                />
              </StyledMailSidebarList>

              <StyledMailSidebarTitle>
                <IntlMessages id="common.labels" />
              </StyledMailSidebarTitle>
              <StyledMailSidebarList
                component="nav"
                aria-label="main mailbox folders"
              >
                <AppList
                  data={labelList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder />}
                    />
                  }
                  renderItem={(label) => (
                    <LabelItem key={label.id} label={label} />
                  )}
                />
              </StyledMailSidebarList>
              <StyledMailSidebarTitle>
                <IntlMessages id="common.connections" />
              </StyledMailSidebarTitle>

              <List>
                <AppList
                  data={connectionList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder />}
                    />
                  }
                  renderItem={(connection) => {
                    return (
                      <ConnectionListItem
                        connection={connection}
                        key={connection.id}
                      />
                    );
                  }}
                />
              </List>
            </StyledMailSidebarContent>
          </StyledMailSidebarScrollbar>
        </>
      ) : null}

      {isComposeMail ? (
        <ComposeMail
          isComposeMail={isComposeMail}
          onCloseComposeMail={onCloseComposeMail}
        />
      ) : null}
    </>
  );
};

export default MailSidebar;
