import styled from 'styled-components';
import AppIconButton from '@crema/components/AppIconButton';
import AppsDeleteIcon from '@crema/components/AppsDeleteIcon';
import { Avatar, Button, Divider, Form, Select } from 'antd';
import AppScrollbar from '@crema/components/AppScrollbar';

export const StyledTodoDetailArrow = styled(AppIconButton)`
  margin-left: -10px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: -10px;
  }
`;

export const StyledTodoStarIconView = styled.span`
  margin-left: auto;
  display: none;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const StyledTodoDetailDeleteIcon = styled(AppsDeleteIcon)`
  margin-left: auto;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.disabled};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: 16px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }
`;

export const StyledTodoDetailStatusBtn = styled.span`
  margin-left: 8px;
  padding: 7px 16px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.sm};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: 16px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.font.size.base};
  }

  &.bg-color {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  & .check-icon {
    margin-right: 4px;
    font-size: 18px;
    vertical-align: middle;

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
  }
`;

export const StyledTodoSelectBox = styled(Select)`
  position: relative;
  width: 100%;
`;

export const StyledTodoCrByInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledTodoCrByInfoContent = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.size.base} - 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
  }

  & .todo-cr-on {
  }
`;

export const StyledTodoAvatar30 = styled(Avatar)`
  width: 30px;
  height: 30px;

  &.todo-avatar-name {
    font-size: ${({ theme }) => theme.font.size.lg};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTodoCrByName = styled.span`
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: inline-block;
  color: ${({ theme }) => theme.palette.primary.main};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledTodoCrOn = styled.span`
  color: ${({ theme }) => theme.palette.gray[500]};
  margin-left: 8px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledDetailContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledTodoDetailContentHeader = styled.div`
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  & h2 {
    margin-right: 20px;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 18px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      font-size: 20px;
    }
  }
`;

export const StyledTodoDetailContentHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: auto;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: auto;
    }
  }
`;
export const StyledTodoDetailContentHeaderLabel = styled.div`
  margin-bottom: 10px;
`;

export const StyledTodoDetailContentHeaderTag = styled.div`
  margin-right: 4px;
  margin-bottom: 10px;
`;

export const StyledTodoDetailContentHeaderTagBtn = styled.span`
  padding: 4px 12px;
  font-size: ${({ theme }) => theme.font.size.base};
  border-radius: ${({ theme }) => theme.cardRadius30};
  display: inline-block;
`;

export const StyledTodoDetailStaffEdit = styled.div`
  margin-bottom: 20px;
  display: flex;
`;
export const StyledTodoDetailStaffEditBtnView = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledTodoDetailStaffRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
  }

  & .ant-form-item {
    margin-bottom: 0;
  }
`;

export const StyledTodoDetailStaff = styled.div`
  margin-bottom: 12px;
  height: 36px;
  min-width: 200px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 0;
  }
`;

export const StyledTodoDivider = styled(Divider)`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const StyledTodoDetailPara = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 0;
`;

export const StyledTodoDetailTextAreaForm = styled.div`
  margin-bottom: 0;

  & textarea.ant-input {
    height: 150px;
  }
`;

export const StyledTodoDetailStatusPri = styled.div`
  margin-bottom: 10px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

export const StyledTodoDetailStatus = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  min-width: 105px;
`;

export const StyledTodoDetailFooter = styled(StyledTodoDetailTextAreaForm)`
  position: relative;
  margin-top: auto;
  display: flex;
  align-items: center;

  & textarea.ant-input {
    padding: 10px 14px;
  }
`;

export const StyledTodoDetailBtn = styled(Button)`
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
`;

export const StyledTodoDetailDatePicker = styled(Form.Item)`
  margin-left: 0;

  [dir='rtl'] & {
    margin-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: 20px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 20px;
    }
  }
`;

export const StyledTodoChStaffAvatar = styled(Avatar)`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledTodoAssignedStaff = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledTodoAvatar36 = styled(Avatar)`
  width: 36px;
  height: 36px;

  &.todo-avatar-name {
    font-size: ${({ theme }) => theme.font.size.lg};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTodoAssignedStaffInfo = styled.div`
  margin-left: 14px;
  font-size: ${({ theme }) => theme.font.size.base} - 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }

  & p {
    margin-bottom: 2px;
  }
`;

export const StyledTodoAssignedStaffTitle = styled.p`
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledTodoCommentItem = styled.div`
  margin-top: 6px;
  display: flex;
  position: relative;

  &.hideUserInfo {
    position: relative;
    margin-top: 4px;

    & .todo-comment-time,
    & .todo-comment-user {
      display: none;
    }

    & .todo-comment-view {
      margin-left: 46px;
    }
  }

  &.last-chat-message {
    & .todo-comment-msg {
      border-bottom-left-radius: ${({ theme }) =>
        theme.sizes.borderRadius.base};
    }
  }
`;

export const StyledTodoCommentView = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const StyledTodoCommentMsgView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTodoCommentTime = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.gray[500]};
  display: block;
`;

export const StyledTodoCommentMsg = styled.div`
  display: flex;
  border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  padding: 8px 12px;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.dividerColor};
  font-size: ${({ theme }) => theme.font.size.base};

  [dir='rtl'] & {
    border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius.base};
    border-bottom-right-radius: 0;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledTodoComment = styled.div`
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledTodoCommentTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 16px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  border-bottom: 1px solid ${({ theme }) => theme.palette.dividerColor};
  padding-bottom: 10px;
`;

export const StyledTodoCommentBody = styled.div`
  flex: 1;
`;

export const StyledTodoCommentScroll = styled(AppScrollbar)`
  max-height: 164px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    max-height: 250px;
  }

  @media screen and (min-width: 1920px) {
    max-height: 292px;
  }

  @media screen and (min-width: 2000px) {
    max-height: 392px;
  }

  @media screen and (min-width: 2400px) {
    max-height: 100%;
  }
`;

export const StyledTodoCommentArea = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const StyledTodoCommentUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 22px;
  position: relative;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }

  & .todo-name {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    position: absolute;
    left: 0;
    bottom: -23px;
    z-index: 1;
    white-space: nowrap;
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  &:hover .todo-name {
    opacity: 1;
    visibility: visible;
  }
`;
