import styled from 'styled-components';
import { Avatar, Input, Tabs } from 'antd';
import AppScrollbar from '@crema/components/AppScrollbar';
import { rgba } from 'polished';

const { Search } = Input;

export const StyledChatSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledChatSidebarUserView = styled.div`
  padding: 16px 24px 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-bottom: 20px;
  }
`;
export const StyledChatSidebarSearchView = styled.div`
  padding: 0 24px 8px;
  width: 100%;
`;

export const StyledChatSidebarSearch = styled(Search)`
  position: relative;

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }

  & .ant-input-group > .ant-input:last-child,
  & .ant-input-group-addon:last-child,
  &.ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    [dir='rtl'] & {
      border-radius: ${({ theme }) => theme.sizes.borderRadius.base} 0 0
        ${({ theme }) => theme.sizes.borderRadius.base};
    }
  }
`;

export const StyledChatSidebarTabs = styled(Tabs)`
  height: 100%;

  & .ant-tabs-content {
    height: 100%;
  }

  & .ant-tabs-nav-list {
    width: 100%;
  }

  & .ant-tabs-tab {
    width: 50%;
    justify-content: center;
    padding: 6px 12px;
    min-height: 48px;
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  & .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 0;

    [dir='rtl'] & {
      margin-right: 0;
    }
  }

  &.ant-tabs > .ant-tabs-nav {
    margin-bottom: 8px;
  }
`;

export const StyledTabItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    font-size: 16px;
  }
`;

export const StyledChatListItem = styled.div`
  display: flex;
  padding: 8px 20px;
  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.07)};
  }
`;

export const StyledChatAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 45px;
    height: 45px;
  }
`;

export const StyledChatListItemContent = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  padding-left: 14px;
  width: calc(100% - 40px);
  color: ${({ theme }) => theme.palette.text.secondary};
  overflow: hidden;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 16px;
  }

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export const StyledAppScrollbar = styled(AppScrollbar)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledChatSidebarTitle = styled.h3`
  padding: 8px 20px 4px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.lg};
`;
