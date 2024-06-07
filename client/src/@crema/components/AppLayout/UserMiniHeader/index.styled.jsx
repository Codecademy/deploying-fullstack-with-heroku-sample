import styled from 'styled-components';
import AppScrollbar from '../../AppScrollbar';
import { Input, Layout } from 'antd';
import MainSidebar from '../components/MainSidebar';

const { Header } = Layout;
const { Search } = Input;

export const StyledAppUserMinibar = styled(Header)`
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.palette.text.primary} !important;
  background-color: ${({ theme }) => theme.palette.background.paper} !important;
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor} !important;
  width: 100% !important;
  transition: all 0.1s linear;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;

  [dir='rtl'] & {
    right: auto;
    left: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 30px;
    padding-right: 30px;
    height: 71px !important;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: calc(100% - 17.5rem) !important;
  }

  & .trigger {
    font-size: 24px;
    margin-right: 20px;
    padding: 5.5px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }

  & .cr-user-info {
    background-color: transparent;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding-left: 5px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 5px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding-right: 0;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 16px;
      }
    }
  }

  & .cr-user-info-content {
    display: none;
  }
`;

export const StyledUserMiniHeaderSearch = styled(Search)`
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

export const StyledUserMiniSectionDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    align-items: center;
  }
`;
export const StyledUserMiniSectionMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }

  & .ant-dropdown-link {
    font-size: 24px;
    color: ${({ theme }) => theme.palette.text.primary};

    & svg {
      display: block;
    }
  }
`;

export const StyledUserMiniSidebar = styled(MainSidebar)`
  &.ant-layout-sider {
    flex: 0 0 auto !important;
    max-width: none !important;
    min-width: 0 !important;
    width: 17.5rem !important;
    transition: all 0.1s linear;
    background-color: ${({ theme }) => theme.sidebar.light.sidebarBgColor};
    color: ${({ theme }) => theme.palette.text.primary};
    border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
    position: fixed;
    left: 0;
    top: 0;

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      width: 17.5rem !important;
    }
  }

  &.ant-layout-sider-collapsed {
    width: 4rem !important;
    transition: all 200ms linear;

    & + .app-layout-userMiniHeader-main {
      width: calc(100% - 4rem) !important;
      margin-left: 4rem;
      transition: all 200ms linear;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 4rem;
      }

      & .app-userMiniHeader {
        width: calc(100% - 4rem) !important;
        transition: all 200ms linear;
      }
    }
  }

  &.ant-layout-sider-collapsed {
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

  &.userMiniHeader-sidebar-img-background {
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

export const StyledAppScrollBarMini = styled(AppScrollbar)`
  height: 100vh;

  .appMainFixedFooter & {
    height: calc(100vh - 46px);
  }
`;

export const StyledAppLayoutMinibar = styled(Layout)`
  min-height: 100vh;
  position: relative;
  padding-top: 56px;
  background-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 71px;
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

export const StyledAppLayoutMinibarMain = styled(Layout)`
  transition: all 0.1s linear;
  width: 100% !important;
  margin-left: 0;
  position: relative;
  background-color: ${({ theme }) =>
    theme.palette.background.default} !important;

  [dir='rtl'] & {
    margin-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: calc(100% - 17.5rem) !important;
    margin-left: 17.5rem;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 17.5rem;
    }
  }
`;

export const StyledUserMiniHeaderScrollbar = styled(AppScrollbar)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: calc(100vh - 56px);

  .appMainFixedFooter & {
    max-height: calc(100vh - 104px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-height: calc(100vh - 71px);

    .appMainFixedFooter & {
      max-height: calc(100vh - 118px);
    }
  }
`;
