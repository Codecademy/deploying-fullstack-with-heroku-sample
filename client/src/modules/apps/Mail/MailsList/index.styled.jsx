import AppsPagination from '@crema/components/AppsPagination';
import { Avatar, Checkbox, Input } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

const { Search } = Input;

export const StyledMailListDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const StyledMailListMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const StyledAppsMailFooter = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const StyledMailListItem = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding: 8px 24px;
  cursor: pointer;
  justify-content: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 9px;
    padding-bottom: 9px;
  }

  &.mailRead {
    background-color: ${({ theme }) => rgba(theme.palette.black, 0.03)};
  }
  &:hover {
    & .mail-list-btn-action {
      opacity: 1;
      visibility: visible;
      width: 144px;
    }

    & .mail-list-time,
    & .mail-tag-view {
      opacity: 0;
      visibility: hidden;
    }

    & .mail-list-sub {
      width: calc(100% - 145px);
    }
  }
`;

export const StyledMailListContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: auto;
  }

  & .mail-list-time {
    font-size: ${({ theme }) => theme.font.size.sm};
    width: auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: none;
    }
  }
`;

export const StyledMailListCheckbox = styled.span`
  padding-right: 10px;
  display: inline-block;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 10px;
  }
`;
export const StyledMailListStarted = styled.span`
  padding-right: 10px;
  font-size: 20px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: inline-block;
  }
`;

export const StyledMailListAvatar = styled(Avatar)`
  margin-right: 14px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 18px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }
`;

export const StyledMailListTitle = styled.p`
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.text.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 120px;
  }

  .mailRead & {
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;

export const StyledMailListTime = styled.span`
  padding-left: 8px;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.4s ease;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 8px;
  }
`;

export const StyledMailListDate = styled.span`
  padding-left: 8px;
  white-space: pre;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 8px;
  }
`;

export const StyledMailListAction = styled.div`
  width: 100%;
  padding: 8px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(100% - 245px);
    padding: 0 0 0 16px;
    margin-left: auto;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 16px;
      margin-left: 0;
      margin-right: auto;
    }
  }

  & .mail-list-time {
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: flex;
    }
  }
`;

export const StyledMailListSub = styled.div`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s ease;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(100% - 100px);
  }
`;

export const StyledMailListSubTitle = styled.div`
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  white-space: nowrap;

  .mailRead & {
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;

export const StyledMailDesc = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-left: 8px;
  margin-bottom: 0;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  & p {
    margin-bottom: 0;
    display: inline;

    &:not(:first-child) {
      margin-left: 4px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 4px;
      }
    }
  }
`;

export const StyledMailTagView = styled.span`
  padding-left: 12px;
  transition: all 0.4s ease;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 12px;
  }
`;

export const StyledMailTag = styled.span`
  font-size: 18px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 20px;
  }

  & svg {
    display: block;
  }
`;

export const StyledMailListActionBtn = styled.div`
  display: flex;
  align-items: center;
  top: 50%;
  right: 0;
  opacity: 0;
  z-index: 1;
  position: absolute;
  transform: translateY(-50%);
  transition: all 0.4s ease;
  visibility: hidden;
  flex-direction: row;
  overflow: hidden;
  width: 0;

  [dir='rtl'] & {
    right: auto;
    left: 0;
  }
`;

export const StyledMailCheckedAction = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMailContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledMailContentHeaderCheckbox = styled(Checkbox)`
  margin-right: 10px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }
`;

export const StyledMailSearch = styled(Search)`
  position: relative;
  max-width: 165px;
  margin-left: 12px;
  margin-right: 12px;

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

export const StyledMailContentHeaderPagination = styled(AppsPagination)`
  margin-left: auto;
  display: flex;
  align-items: center;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    display: none;
  }
`;

export const StyledMailDots = styled.span`
  height: 12px;
  width: 12px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  display: block;
`;
