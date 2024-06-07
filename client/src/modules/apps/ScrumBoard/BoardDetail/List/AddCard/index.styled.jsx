import AppScrollbar from '@crema/components/AppScrollbar';
import { Avatar, Checkbox, DatePicker, Drawer, Form, Input } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledScrumBoardAddCardForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & .ant-form-item {
    margin-bottom: 20px;
  }
`;

export const StyledScrumBoardScrollbar = styled(AppScrollbar)`
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledScrumBoardAddCardFormContent = styled.div`
  padding: 20px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledScrumBoardDatePicker = styled(DatePicker)`
  position: relative;
  width: 100%;
`;

export const StyledMultiSelect = styled.div`
  display: flex;
  align-items: center;

  .ant-select-multiple & {
    & .ant-avatar {
      width: 20px;
      height: 20px;
    }
  }
`;

export const StyledMultiSelectName = styled.span`
  margin-left: 10px;

  .ant-select-multiple & {
    font-size: 11px;
  }
`;

export const StyledScrumBoardAddCardFormFooter = styled.div`
  padding: 16px 32px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 0 0 ${({ theme }) => theme.sizes.borderRadius.base}
    ${({ theme }) => theme.sizes.borderRadius.base};
  text-align: right;

  [dir='rtl'] & {
    text-align: left;
  }

  & .ant-btn {
    width: 100px;

    &:not(:first-child) {
      margin-left: 10px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const StyledScrumBoardAttachmenTitle = styled.h4`
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 20px;
  }
`;

export const StyledScrumBoardAttachment = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;
export const StyledScrumBoardAttachmentItems = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 12px;
  width: 50%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 33.33%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 25%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 20%;
  }
`;

export const StyledScrumBoardAttachmentCard = styled.div`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.5s ease;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.palette.text.primary, 0.1)};

    & .scrum-board-attachment-items-action {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const StyledScrumBoardAttachmentImg = styled.div`
  width: 100%;
  position: relative;

  & img {
    width: 100%;
    height: 132px;
    object-fit: cover;
  }
`;

export const StyledScrumBoardAttachmentAction = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${({ theme }) => rgba(theme.palette.text.primary, 0.6)};
  transition: all 0.5s ease;
  opacity: 0;
  visibility: hidden;

  & .icon-btn {
    background-color: ${({ theme }) =>
      rgba(theme.palette.background.paper, 0.5)};
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    &:hover {
      background-color: ${({ theme }) =>
        rgba(theme.palette.background.paper, 0.6)};
      color: ${({ theme }) => theme.palette.text.primary};
    }

    &:not(:first-child) {
      margin-left: 10px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const StyledScrumBoardAttachmentContent = styled.div`
  padding: 8px 12px;
`;
export const StyledScrumBoardAttachmentFileName = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 4px;
  display: block;
`;

export const StyledScrumBoardAttachmentFileTime = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.palette.text.primary};

  & span {
    margin-right: 4px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 4px;
    }
  }
`;

export const StyledScrumBoardCardCheckList = styled.div`
  margin-bottom: 32px;
`;

export const StyledScrumBoardCardCheckListHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  & h4 {
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 0;
  }

  & .ant-btn {
    margin-left: auto;
    padding: 6px 16px;
    font-weight: ${({ theme }) => theme.font.weight.light};
    text-transform: capitalize;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: auto;
    }
  }
`;

export const StyledScrumBoardCardCheckListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  & .icon-btn {
    margin-left: 12px;
    margin-right: -12px;
    transition: all 0.5s ease;
    opacity: 0;
    visibility: hidden;

    [dir='rtl'] & {
      margin-left: -12px;
      margin-right: 12px;
    }
  }

  &:hover {
    & .icon-btn {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const StyledScrumBoardCheckbox = styled(Checkbox)`
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledScrumBoardInput = styled(Input)`
  width: 100%;
`;

export const StyledCommentCellWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.palette.text.primary};

  &:not(:first-child) {
    margin-top: 16px;
  }

  &.scrum-board-card-comment-item-previous {
    &:not(:first-child) {
      margin-top: 1px;
    }

    & .scrum-board-card-comment-item-user-date,
    & .scrum-board-card-comment-item-user-avatar {
      display: none;
    }

    & .scrum-board-card-comment-item-user-content {
      margin-left: 54px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 54px;
      }
    }
  }
`;

export const StyledCommentAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: ${({ theme }) => theme.palette.orange[5]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.size.lg};
`;

export const StyledCommentItemContent = styled.div`
  margin-left: 14px;
  flex: 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }
`;

export const StyledCommentItemDate = styled.span`
  color: ${({ theme }) => theme.palette.text.disabled};
  font-size: ${({ theme }) => theme.font.size.sm};
  display: block;
  margin-bottom: 6px;
`;

export const StyledCardCommentArea = styled.div`
  display: inline-block;
  box-shadow: none;
  border-radius: 0 10px 10px 0;
  padding: 6px 12px;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.dividerColor};
  font-size: ${({ theme }) => theme.font.size.base};

  [dir='rtl'] & {
    border-radius: 10px 0 0 10px;
  }

  .last-scrum-board-message & {
    border-radius: 0 10px 10px 10px;

    [dir='rtl'] & {
      border-radius: 10px 0 10px 10px;
    }
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledScrumCardCommentView = styled.div`
  margin: 0 -24px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding: 20px 24px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const StyledScrumCardCommentTitle = styled.h4`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.font.size.lg};
`;

export const StyledScrumBoardCommentScroll = styled(AppScrollbar)`
  max-height: 200px;
`;

export const StyledScrumBoardCardComment = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const StyledCardCommentFooter = styled.div`
  position: relative;
  margin-top: auto;
  display: flex;
  align-items: center;
  margin-top: 10px;

  & textarea.ant-input {
    padding: 10px 14px;
  }

  & .ant-btn {
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 12px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 12px;
    }
  }
`;

export const StyledScrumBoardCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 20px;
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 0;
  }
`;

export const StyledScrumBoardCardHeaderAction = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledScrumBoardAppCardDrawer = styled(Drawer)`
  & .anticon-close {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  & .ant-drawer-body {
    padding: 0;
  }

  & .ant-drawer-header {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
