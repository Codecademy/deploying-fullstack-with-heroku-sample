import AppScrollbar from '@crema/components/AppScrollbar';
import { rgba } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContactSidebarLabelItem = styled(NavLink)`
  font-size: 15px;
  margin-bottom: 1px;
  border-bottom: 0 none !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 8.5px 16px;
  margin-right: 20px;
  border-radius: 0 ${({ theme }) => theme.cardRadius30}
    ${({ theme }) => theme.cardRadius30} 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 8.5px 20px;
  }

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
  }

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 20px;
    border-radius: 30px 0 0 30px;
  }
`;

export const StyledContactLabelItem = styled.span`
  width: 12px;
  height: 12px;
  font-size: 18px;
  margin-bottom: 6px;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-right: 20px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }

  & svg {
    display: block;
  }
`;

export const StyledContactSidebarHeader = styled.div`
  padding: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 20px;
  }

  & .ant-btn {
    border-radius: ${({ theme }) => theme.cardRadius30};
    padding: 8px 28px;
    height: 42.5px;
  }
`;

export const StyledContactSidebarScroll = styled(AppScrollbar)`
  height: calc(100% - 80px);
`;

export const StyledContactSidebarContent = styled.div`
  padding-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: 20px;
  }
`;
export const StyledContactSidebarList = styled.div`
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }
`;

export const StyledContactSidebarTitle = styled.h5`
  margin-top: 16px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.base};
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-top: 20px;
  }
`;
