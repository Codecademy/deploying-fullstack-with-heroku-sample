import { IdcardOutlined, PhoneOutlined } from '@ant-design/icons';
import AppFooter from '@crema/components/AppsContainer/AppsFooter';
import { Avatar, Card, Input } from 'antd';
import styled from 'styled-components';
import { MdLabelOutline } from 'react-icons/md';
import AppsPagination from '@crema/components/AppsPagination';
import { rgba } from 'polished';

const { Search } = Input;

export const StyledAppFooter = styled(AppFooter)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const StyledContactListItemHover = styled.span`
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  transition: all 0.4s ease;
  position: absolute;
  right: 24px;
  top: 50%;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  width: 0;
  overflow: hidden;

  [dir='rtl'] & {
    right: auto;
    left: 24px;
  }
`;

export const StyledContactGridCard = styled(Card)`
  border-radius: ${({ theme }) => theme.cardRadius};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;

  & .ant-card-body {
    padding: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding: 20px;
    }
  }

  & .contact-list-item-action-hover {
    top: 0;
    transform: inherit;
  }

  &:hover {
    & .contact-list-item-action-hover {
      right: 0;
      opacity: 1;
      visibility: visible;
      width: 108px;

      [dir='rtl'] & {
        right: auto;
        left: 0;
      }
    }

    & .contact-grid-card-header-action {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const StyledContactGridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  position: relative;

  & .anticon-more {
    font-size: 20px;
  }
`;

export const StyledContactGridHeaderCheckbox = styled.span`
  min-width: 36px;
`;

export const StyledGridCardAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledGridCardActionHeader = styled.span`
  position: relative;
  transition: all 0.5s ease;
`;

export const StyledGridCardContent = styled.div`
  text-align: center;
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }
`;
export const StyledGridCardTitle = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledGridCardAction = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.size.base};
  border-top: solid 2px ${({ theme }) => theme.palette.dividerColor};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StyledGridCardActionItem = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 50%;
  }

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.palette.dividerColor};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      border-top: 0 none;
      border-left: 1px solid ${({ theme }) => theme.palette.dividerColor};

      [dir='rtl'] & {
        border-left: 0 none;
        border-right: 1px solid ${({ theme }) => theme.palette.dividerColor};
      }
    }
  }
`;

export const StyledIdcardOutlined = styled(IdcardOutlined)`
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledPhoneOutlined = styled(PhoneOutlined)`
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledContactListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding: 7px 24px;
  cursor: pointer;
  position: relative;

  &.rootCheck {
    font-weight: ${({ theme }) => theme.font.weight.light};
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
  }

  &:hover {
    & .contact-list-item-action-hover {
      opacity: 1;
      visibility: visible;
      width: 108px;
    }

    & .contact-list-item-action {
      opacity: 0;
      visibility: hidden;
    }

    & .contact-list-item-company {
      transform: translateX(-15px);

      [dir='rtl'] & {
        transform: translateX(15px);
      }
    }
  }
`;

export const StyledContactListItemCheckView = styled.span`
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledContactListItemAvatarView = styled.span`
  position: relative;
`;

export const StyledContactListItemAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledContactListItemTitle = styled.span`
  margin-right: 16px;
  margin-left: 16px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  flex: 1;
`;

export const StyledContactListItemMail = styled.span`
  flex: 1;
  margin-right: 16px;
  display: none;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const StyledContactListItemCompany = styled.span`
  flex: 1;
  margin-right: 16px;
  display: none;
  transition: all 0.4s ease;
  transform: translateX(0);

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export const StyledContactListItemCol = styled.span`
  flex: 1;
  margin-right: 16px;
  display: none;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export const StyledContactListItemAction = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 20px;
  transition: all 0.5s ease;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledContactListExportIcon = styled(MdLabelOutline)`
  margin-left: 8px;
  display: none;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;
export const StyledContactListItemMenuView = styled.span`
  margin-left: 8px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledContactListItemMobile = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding: 7px 24px;
  cursor: pointer;
  position: relative;

  &.rootCheck {
    font-weight: ${({ theme }) => theme.font.weight.light};
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
  }
`;

export const StyledContactListMainContent = styled.div`
  position: relative;
  width: calc(100% - 60px);
  display: flex;
  align-items: center;
  padding-right: 10px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 10px;
  }
`;

export const StyledContactListMobileAvatarView = styled.div`
  margin-right: 14px;
  margin-top: 3px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }

  &.checked {
    width: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledContactListItemContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledContactListContentMobileItem = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const StyledContactListItemActionMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 60px;
`;

export const StyledContactListExportMobileIcon = styled(MdLabelOutline)`
  font-size: 20px;
`;

export const StyledContactListStarMobile = styled.span`
  margin-left: 6px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 6px;
  }
`;

export const StyledContactListDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const StyledContactListMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const StyledContactGridView = styled.div`
  padding: 24px;
`;

export const StyledContactHeaderCheckboxView = styled.div`
  margin-right: 20px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 20px;
  }
`;

export const StyledContactCheckedAction = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }
`;

export const StyledContactViewSelect = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledContactContentHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const StyledContactSearch = styled(Search)`
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

export const StyledContactHeaderPagination = styled(AppsPagination)`
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
