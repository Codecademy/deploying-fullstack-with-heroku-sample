import styled from 'styled-components';
import { Drawer, Input, Layout } from 'antd';
import MainSidebar from '../components/MainSidebar';
import AppScrollbar from '../../AppScrollbar';

const { Header } = Layout;
const { Search } = Input;

export const StyledDrawerLayoutHeader = styled(Header)`
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.palette.text.primary} !important;
  background-color: ${({ theme }) => theme.palette.background.paper} !important;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor} !important;
  height: 56px;
  line-height: 1;
  transition: all 0.1s linear;
  position: sticky;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 30px;
    padding-right: 30px;
    height: 71px !important;
  }

  & .trigger {
    font-size: 20px;
    margin-right: 20px;
    padding: 5.5px;
    color: ${({ theme }) => theme.palette.text.primary};

    & svg {
      display: block;
    }

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }
`;

export const StyledDrawerLayoutHeaderSearch = styled(Search)`
  position: relative;
  max-width: 140px;
  min-height: 36px;
  margin-left: auto;
  margin-right: 10px;

  [dir='rtl'] & {
    margin-left: 10px;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 20px;
    max-width: 165px;

    [dir='rtl'] & {
      margin-right: auto;
      margin-left: 20px;
    }
  }

  & .ant-input-wrapper {
    top: 50%;
    right: 0;
    z-index: 1;
    position: absolute;
    transform: translateY(-50%);

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
    transition: all 0.2s ease;
    width: 104px;

    &:focus {
      width: 135px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 129px;

      &:focus {
        width: 165px;
      }
    }
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }

  &.ant-input-search-rtl
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base} 0 0
      ${({ theme }) => theme.sizes.borderRadius.base};
  }
`;

export const StyledDrawerLayoutHeaderDesk = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    align-items: center;
  }
`;
export const StyledDrawerLayoutHeaderMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }

  & .ant-dropdown-link-mobile {
    font-size: 24px;
    color: ${({ theme }) => theme.palette.text.primary};

    & svg {
      display: block;
    }
  }
`;

export const StyledAppDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 17.5rem !important;
  }

  & .ant-drawer-body {
    padding: 0;
  }

  & .cr-user-info {
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;

export const StyledAppDrawerLayoutSidebar = styled(MainSidebar)`
  &.ant-layout-sider {
    flex: 0 0 auto !important;
    max-width: none !important;
    min-width: 0 !important;
    width: 100% !important;
    transition: all 0.1s linear;
    border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
  }

  & .ant-layout-sider-trigger {
    display: none;
  }

  &.ant-layout-sider-has-trigger {
    padding-bottom: 0;
  }

  // Sidebar Collapsed
  &.ant-layout-sider-collapsed {
    width: 0 !important;
    transition: all 200ms linear;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      width: 4rem !important;
    }

    & + .app-DrawerLayout-main {
      width: 100% !important;
      transition: all 200ms linear;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
        width: calc(100% - 4rem) !important;
      }
    }

    & .cr-user-info {
      padding-left: 12px;
      padding-right: 12px;
    }

    & .cr-user-info-content {
      opacity: 0;
      visibility: hidden;
      width: 0;
      padding-left: 0;
      padding-right: 0;
    }

    & .ant-menu-item-group-title {
      opacity: 0;
      visibility: hidden;
      width: 0;
      height: 0;
      padding: 0;
    }
  }

  &.drawerLayout-sidebar-img-background {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: inherit;
      z-index: 1;
      opacity: 0.5;
    }

    & > div {
      position: relative;
      z-index: 3;
    }

    & .ant-menu.ant-menu-dark,
    .ant-menu-dark .ant-menu-sub,
    .ant-menu.ant-menu-dark .ant-menu-sub {
      background-color: transparent;
      color: inherit;
    }

    & .app-main-sidebar-menu.ant-menu-dark .ant-menu-item-group-title,
    & .app-main-sidebar-menu .ant-menu-item a {
      color: inherit;
    }
  }
`;

export const StyledAppDrawerSidebarScrollbar = styled(AppScrollbar)`
  height: calc(100vh - 56px);

  .appMainFixedFooter & {
    height: calc(100vh - 102px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: calc(100vh - 71px);

    .appMainFixedFooter & {
      height: calc(100vh - 116px);
    }
  }
`;

export const StyledAppDrawerLayout = styled(Layout)`
  min-height: 100vh;
  position: relative;
  background-color: transparent;
  overflow-x: hidden;

  &.appMainFixedFooter {
    padding-bottom: 46px;

    & .app-main-footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9;
      width: 100%;
    }
  }
`;

export const StyledAppDrawerLayoutMain = styled(Layout)`
  transition: all 0.1s linear;
  width: 100% !important;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const StyledDrawerScrollbar = styled(AppScrollbar)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-height: calc(100vh - 56px);

  .appMainFixedFooter & {
    max-height: calc(100vh - 104px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-height: calc(100vh - 71px);

    .appMainFixedFooter & {
      max-height: calc(100vh - 118px);
    }
  }
`;
