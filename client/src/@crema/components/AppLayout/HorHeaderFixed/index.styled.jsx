import AppScrollbar from '../../AppScrollbar';
import { Drawer, Input, Layout } from 'antd';
import styled from 'styled-components';
import MainSidebar from '../components/MainSidebar';
import AppHorizontalNav from '../components/AppHorizontalNav';

const { Header } = Layout;
const { Search } = Input;

export const StyledAppHeaderHorFixed = styled(Header)`
  background-color: inherit;
  color: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor} !important;
  width: 100% !important;
  height: auto !important;
  line-height: 1 !important;
  padding: 0;
  padding-inline: 0 !important;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  & .trigger {
    font-size: 24px;
    margin-right: 20px;
    padding: 5.5px;
    color: inherit;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      display: none;
    }

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }
`;

export const StyledAppHeaderHorFixedMain = styled.div`
  position: relative;
  background-color: inherit;
  min-height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .cr-user-info {
    padding: 8px;
    background-color: transparent;
    min-height: auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding-left: 12px;
      padding-right: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }
  }

  & .cr-user-info-content {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    max-width: 1140px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    max-width: 1440px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1720px;
  }
`;

export const StyledAppHeaderHorMainFlex = styled.div`
  display: flex;
  align-items: center;

  & .hor-user-info-name {
    display: none;
  }
`;

export const StyledAppHorizontalNav = styled(AppHorizontalNav)`
  background-color: inherit;
  color: inherit;
  border-bottom: 0 none;
  display: none;
  width: 100%;
  padding-left: 12px;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: block;
  }

  &.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
  &.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    padding: 0 10px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  }

  & .ant-menu-submenu .ant-menu-submenu-title {
    padding: 12px 10px;
  }

  &.ant-menu-horizontal > .ant-menu-item::after,
  &.ant-menu-horizontal > .ant-menu-submenu::after {
    display: none;
  }

  &.ant-menu-horizontal:not(.ant-menu-dark) {
    & > .ant-menu-item:hover,
    & > .ant-menu-submenu:hover,
    & > .ant-menu-item-active,
    & > .ant-menu-submenu-active,
    & > .ant-menu-item-open,
    & > .ant-menu-submenu-open,
    & > .ant-menu-item-selected,
    & > .ant-menu-submenu-selected {
      color: inherit;
      border-bottom: 0 none;
    }
  }

  & .ant-menu-submenu-title {
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  &.ant-menu-horizontal > .ant-menu-item,
  &.ant-menu-horizontal > .ant-menu-submenu {
    border-bottom: 0 none;
  }
`;

export const StyledHeaderSearchHorFixed = styled(Search)`
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

export const StyledHeaderHorFixedSecDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledHeaderHorFixedSecMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }

  & .ant-dropdown-link {
    font-size: 24px;
    color: inherit;

    & svg {
      display: block;
    }
  }
`;

export const StyledAppHeaderDrawerFixed = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 17.5rem !important;
  }

  & .ant-drawer-body {
    padding: 0;
  }
`;

export const StyledAppHorHeaderFixedSidebar = styled(MainSidebar)`
  &.ant-layout-sider {
    flex: 0 0 auto !important;
    max-width: none !important;
    min-width: 0 !important;
    width: 17.5rem !important;
    transition: all 0.1s linear;
    background-color: ${({ theme }) => theme.sidebar.light.sidebarBgColor};
    color: ${({ theme }) => theme.sidebar.light.sidebarTextColor};
    position: fixed;
    left: 0;
    top: 0;

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 17.5rem !important;
    }
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

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 4rem !important;
    }

    & + .app-layout-main {
      width: 100% !important;
      transition: all 200ms linear;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
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

  &.hor-header-fixed-sidebar-img-background {
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

export const StyledAppLayoutHorFixed = styled(Layout)`
  min-height: 100vh;
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column !important;

  & .customizer-option {
    position: fixed;
    top: 138px;
  }

  &.appMainFixedFooter {
    padding-bottom: 46px;

    & .app-main-footer {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9;
      width: 100%;
    }
  }
`;

export const StyledAppLayoutHeaderFixedMain = styled(Layout)`
  width: 100% !important;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.palette.background.default} !important;

  & .ant-layout-content {
    background-color: transparent;
  }

  & .main-content-view {
    padding-left: 0;
    padding-right: 0;
  }

  & > .container {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledAppHorScrollbar = styled(AppScrollbar)`
  height: calc(100vh - 56px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    height: calc(100vh - 71px);
  }
`;
