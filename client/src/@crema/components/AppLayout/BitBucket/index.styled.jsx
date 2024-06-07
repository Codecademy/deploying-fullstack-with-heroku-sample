import { Drawer, Input, Layout } from 'antd';
import MainSidebar from '../components/MainSidebar';
import styled from 'styled-components';
import AppScrollbar from '../../AppScrollbar';
import { rgba } from 'polished';

const { Header } = Layout;
const { Search } = Input;

export const StyledAppBitbucketHeader = styled(Header)`
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.palette.text.primary} !important;
  background-color: ${({ theme }) =>
    theme.palette.primary.contrastText} !important;
  height: 56px;
  line-height: 1;
  box-shadow: 4px 3px 4px 0px rgba(0, 0, 0, 0.12);
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
    height: 71px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    display: none;
  }

  & .trigger {
  }
`;

export const StyledTrigger = styled.a`
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    display: none;
  }
`;

export const StyledBitbucketSearch = styled(Search)`
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

export const StyledAppBitbucketSidebar = styled(MainSidebar)`
  &.bitBucket-sidebar-img-background {
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

  &.app-BitBucket-sidebar {
    &.ant-layout-sider {
      flex: 0 0 auto !important;
      max-width: none !important;
      min-width: 256px !important;
      width: auto !important;
      transition: all 0.1s linear;

      @media screen and (min-width: 1200px) and (max-width: 1300px) {
        width: 190px !important;
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

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
        width: 4rem !important;
      }

      & + .app-layout-main {
        width: 100% !important;
        transition: all 200ms linear;

        @media screen and (min-width: ${({ theme }) =>
            theme.breakpoints.lg}px) {
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
  }
`;

export const StyledAppBitbucketScrollbar = styled(AppScrollbar)`
  height: calc(100vh - 56px);

  .appMainFixedFooter & {
    height: calc(100vh - 102px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    height: calc(100vh - 71px);

    .appMainFixedFooter & {
      height: calc(100vh - 116px);
    }
  }
`;

export const StyledAppBitbucketDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 20rem !important;
  }

  & .ant-drawer-body {
    padding: 0;
  }

  & .app-BitBucket-sidebar-wrapper {
    display: flex;
    width: auto !important;
    transition: all 0.1s linear;
    position: relative;
    border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
  }

  & .cr-user-info {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const StyledAppBitbucketSidebarWrapper = styled.div`
  display: none;
  width: 320px !important;
  transition: all 0.1s linear;
  position: relative;

  border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    display: flex;
  }

  &.app-BitBucket-sidebar-wrapper-close {
    width: 72px !important;

    & .app-BitBucket-sidebar.ant-layout-sider {
      min-width: 0 !important;
      width: 8px !important;
      transition: all 0.1s linear;
      overflow: hidden;
    }
  }
`;

export const StyledBitbucketBtn = styled.a`
  position: absolute;
  top: 20px;
  right: -12px;
  z-index: 3;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 2px;
  font-size: 24px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};

  [dir='rtl'] & {
    right: auto;
    left: -12px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export const StyledBucketMinibar = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  min-width: 64px;
  background-color: ${({ theme }) => theme.sidebar.dark.sidebarBgColor};
  color: inherit;
  border-right: 1px solid
    ${({ theme }) => rgba(theme.sidebar.dark.sidebarBgColor, 0.15)};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: ${() => rgba('black', 0.05)};
  }

  &.dark {
    &:before {
      background-color: ${() => rgba('black', 0.05)};
    }
  }

  [dir='rtl'] & {
    border-right: 0 none;
    border-left: 1px solid
      ${({ theme }) => rgba(theme.sidebar.dark.sidebarBgColor, 0.15)};
  }

  & a {
    color: inherit;
  }
`;

export const StyledBucketMinibarInner = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;

export const StyledBucketMinibarLogo = styled.a`
  min-height: 56px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    min-height: 71px;
  }
`;

export const StyledAppMiniScrollbar = styled(AppScrollbar)`
  display: flex;
  flex-direction: column;
  padding: 12px;
  height: calc(100vh - 56px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    height: calc(100vh - 71px);
  }
`;

export const StyledAppMinibarMain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  & .langBtn {
    margin: 0 0 10px;
    background-color: transparent;

    &:hover,
    &:focus {
      border-color: transparent;
      color: inherit;
    }
  }

  & .lang-text {
    display: none;
  }
`;

export const StyledBucketMinibarLink = styled.a`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-transform: uppercase;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: inherit;
  padding: 9px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  line-height: 1;
`;

export const StyledBucketMinibarSetting = styled.div`
  text-align: center;
  margin-top: auto;
`;

export const StyledAppBitbucketLayout = styled(Layout)`
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

export const StyledAppBitbucketLayoutMain = styled(Layout)`
  transition: all 0.1s linear;
  width: 100% !important;
  position: relative;
  background-color: ${({ theme }) =>
    theme.palette.background.default} !important;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: calc(100% - 320px) !important;
  }

  & .apps-container {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      height: calc(100vh - 78px);
    }
  }
`;

export const StyledBitbucketMainScrollbar = styled(AppScrollbar)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: calc(100vh - 56px);

  .appMainFixedFooter & {
    max-height: calc(100vh - 102px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-height: calc(100vh - 71px);

    .appMainFixedFooter & {
      max-height: calc(100vh - 116px);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-height: 100vh;

    .appMainFixedFooter & {
      max-height: calc(100vh - 48px);
    }
  }
`;
