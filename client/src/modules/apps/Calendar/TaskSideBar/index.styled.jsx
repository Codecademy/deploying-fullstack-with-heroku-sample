import { PlusOutlined } from '@ant-design/icons';
import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTodoSidebarHeader = styled.div`
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

export const StyledTodoScrollbar = styled(AppScrollbar)`
  height: calc(100% - 80px);
`;

export const StyledTodoSidebarContent = styled.div`
  padding-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: 20px;
  }
`;

export const StyledTodoSidebarList = styled(List)`
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }

  & .ant-list-item {
    justify-content: flex-start;
    border-bottom: 0 none;
    cursor: pointer;
  }
`;

export const StyledTodoSidebarTitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-top: 16px;
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

export const StyledTodoLabelItem = styled.div`
  position: relative;
  font-size: 15px;
  margin-bottom: 1px;

  & a {
    display: flex;
    align-items: center;
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
  }

  .filter-item {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 8.5px 16px;
    margin-right: 20px;
    border-radius: 0 ${({ theme }) => theme.cardRadius30}
      ${({ theme }) => theme.cardRadius30} 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding: 8.5px 20px;
    }

    .ant-checkbox-wrapper {
      margin-right: 10px;
    }
  }

  & .todo-dots {
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
  }
`;

export const StyledTodoDots = styled.span`
  height: 12px;
  width: 12px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  display: block;
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 16px;
`;
