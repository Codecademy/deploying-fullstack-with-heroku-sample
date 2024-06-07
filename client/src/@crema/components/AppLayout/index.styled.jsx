import { Layout } from 'antd';
import styled from 'styled-components';
import AppScrollbar from '../AppScrollbar';

export const StyledDropdownWrapper = styled.div`
  & .dropdown-wrapper {
    .ant-dropdown-menu {
      padding: 0;

      .ant-dropdown-menu-item {
        padding: 0;
      }
    }
  }

  & .ant-dropdown-trigger {
    text-transform: none;
  }
  & .ant-dropdown-link-mobile {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-transform: uppercase;
    margin-top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 9px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    border: 1px solid transparent;
  }
`;

export const StyledAuth = styled(Layout)`
  flex: 1;
  display: flex;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  //background-color: @primary-color;

  & .ant-layout-content {
    padding: 20px;
    justify-content: center;
    display: flex;
  }

  & .main-auth-scrollbar {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  & .footer {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const StyledMainAuthScrollbar = styled(AppScrollbar)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
