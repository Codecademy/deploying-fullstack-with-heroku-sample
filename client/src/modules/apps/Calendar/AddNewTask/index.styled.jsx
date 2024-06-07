import AppScrollbar from '@crema/components/AppScrollbar';
import { Avatar, Button, DatePicker, Form, Input, Modal } from 'antd';
import styled from 'styled-components';

export const StyledTodoAddTaskForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & .form-field {
    margin-bottom: 20px;
  }

  & textarea.ant-input {
    height: 170px;
  }
`;

export const StyledTodoModelContent = styled.div`
  flex: 1;
  padding: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const StyledTodoInput = styled(Input)`
  width: 100%;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

export const StyledSelectRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTodoSelectAvatar = styled(Avatar)`
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledTodoSelectName = styled.span`
  width: calc(100% - 60px);
`;

export const StyledAddTaskFormDate = styled(DatePicker.RangePicker)`
  width: 100%;
`;

export const StyledTodoModalFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding: 8px 10px;
  border-radius: 0 0 ${({ theme }) => theme.cardRadius}
    ${({ theme }) => theme.cardRadius};
  text-align: right;

  [dir='rtl'] & {
    text-align: left;
  }
`;

export const StyledTodoModelBtn = styled(Button)`
  padding-left: 32px;
  padding-right: 32px;
`;

export const StyledTodoModal = styled(Modal)`
  position: relative;

  & .ant-modal-body {
    padding: 0;
  }
`;

export const StyledTodoModalScrollbar = styled(AppScrollbar)`
  min-height: 320px;
  padding-top: 4px;
`;
