import { Button } from 'antd';
import { darken, lighten } from 'polished';
import styled from 'styled-components';
import AppScrollbar from '../AppScrollbar';

export const DropDownWrapper = styled.div`
  & .header-messages {
    width: 260px;
    padding: 0;

    .ant-dropdown-menu {
      padding: 0;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 300px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 380px;
    }

    & .ant-dropdown-menu-item {
      padding: 0;
      white-space: normal;

      &:hover {
        background-color: transparent;
      }

      & .header {
        padding: 12px 20px;
        font-weight: ${({ theme }) => theme.font.weight.medium};
        cursor: inherit;

        &:hover,
        &:focus {
          background-color: transparent;
        }
      }
    }
  }
`;

export const StyledAppScrollbar = styled(AppScrollbar)`
  height: 200px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    height: 260px;
  }
`;

export const StyledHeaderMsgBtn = styled(Button)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  width: 100%;
  text-transform: capitalize;
`;

export const StyledHeaderMsgLink = styled.a`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.lg};
  border-radius: 0;
  padding: 18px 12px;
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: transparent;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-transform: uppercase;
    margin-top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: ${({ theme }) =>
      theme.palette.background.default} !important;
    color: ${({ theme }) => theme.palette.text.secondary} !important;
    padding: 9px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    border: 1px solid transparent;
    margin-left: 7.4px;
    margin-right: 7.4px;
    line-height: 1;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.palette.text.primary};
      background-color: ${({ theme }) =>
        lighten(0.005, theme.palette.background.default)};

      border-color: ${({ theme }) =>
        darken(0.1, theme.palette.background.default)};
    }
  }
`;

export const StyledHeaderMsgIcon = styled.span`
  position: relative;
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export const StyledHeaderMsgLinkText = styled.span`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;
