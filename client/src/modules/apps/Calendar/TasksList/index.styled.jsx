import AppsFooter from '@crema/components/AppsContainer/AppsFooter';
import AppsPagination from '@crema/components/AppsPagination';
import { Input, Select } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

const { Search } = Input;

export const StyledTodoListDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;
export const StyledTodoListMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;
export const StyledTodoFooter = styled(AppsFooter)`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;
export const StyledTodoHeaderCheckedAction = styled.span`
  display: flex;
  align-items: center;
  padding-left: 8px;
  color: ${({ theme }) => theme.palette.text.disabled};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 1px;
    height: 22px;
    background-color: ${({ theme }) => theme.palette.borderColor};
    transform: translateY(-50%);

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }
  }

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-right: 8px;
    padding-left: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
      padding-left: 0;
      padding-right: 16px;
    }
  }
`;
export const StyledContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;
export const StyledTodoHeaderCheckboxView = styled.span`
  margin-right: 4px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 4px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;
export const StyledTodoSearch = styled(Search)`
  position: relative;
  max-width: 165px;

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
`;
export const StyledTodoHeaderPagination = styled(AppsPagination)`
  padding-left: 8px;
  padding-right: 8px;
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;
export const StyledTodoTaskDropdown = styled(Select)`
  cursor: pointer;

  & option {
    padding: 8px;
    cursor: pointer;
  }

  & .ant-select-selector {
    height: 32px !important;
    border: 0 none !important;
  }

  & .ant-select-selection-item {
    line-height: 30px !important;
  }
`;
export const StyledTodoTaskDropdownView = styled.span`
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 0;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;
export const StyledTodoViewSelect = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;
export const StyledTodoListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.gray[600]};
  padding: 9.5px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  &.checked {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
    font-weight: ${({ theme }) => theme.font.weight.light};
  }

  &:hover {
    & .todo-list-item-action {
      opacity: 1;
      visibility: visible;
      display: flex;
      width: 72px;
    }

    & .todo-list-item-label-group {
      transform: translateX(-60px);
      opacity: 0;
      visibility: hidden;

      [dir='rtl'] & {
        transform: translateX(60px);
      }
    }

    & .todo-list-item-right-content {
      transform: translateX(-55px);

      [dir='rtl'] & {
        transform: translateX(55px);
      }
    }
  }
`;
export const StyledTodoListItemLeft = styled.div`
  display: flex;
  align-items: center;
  width: 90%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 50%;
  }

  & .ant-tag {
    border-radius: ${({ theme }) => theme.cardRadius30};
  }
`;
export const StyledTodoListCheckboxView = styled.span`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;
export const StyledTodoListImgView = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledTodoListStarView = styled.span`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;
export const StyledTodoListImg = styled.span`
  margin-right: 14px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }

  & .ant-avatar {
    width: 36px;
    height: 36px;
    line-height: 36px;
  }
`;
export const StyledTodoListTitle = styled.span`
  margin-right: 12px;
  position: relative;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;
export const StyledTodoListItemHide = styled.span`
  display: inline-block;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md - 1}px) {
    display: none;
  }
`;
export const StyledTodoListItemRight = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 50%;
    justify-content: flex-end;
    padding-left: 12px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 12px;
    }
  }
`;
export const StyledTodoListRightContent = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  transform: translateX(0);
  overflow: hidden;
`;
export const StyledTodoListStartDate = styled(StyledTodoListItemHide)`
  margin-left: 6px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 6px;
  }
`;
export const StyledTodoListItemAction = styled.div`
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  visibility: hidden;
  display: flex;
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  overflow: hidden;
  width: 0;

  [dir='rtl'] & {
    right: auto;
    left: -20px;
  }
`;
export const StyledTodoLabelGroup = styled.div`
  position: relative;
  margin-right: 14px;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  transform: translateX(0);

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }
`;
export const StyledTodoLabelGroupItem = styled.span`
  font-size: 20px;

  & svg {
    display: block;
  }

  &:not(:first-child) {
    margin-left: 14px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 14px;
    }
  }
`;
