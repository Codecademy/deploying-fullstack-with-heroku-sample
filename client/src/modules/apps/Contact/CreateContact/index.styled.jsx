import AppScrollbar from '@crema/components/AppScrollbar';
import { Avatar, Button, Form, Modal } from 'antd';
import styled from 'styled-components';

export const StyledContactModal = styled(Modal)`
  position: relative;

  & .ant-modal-body {
    padding: 0;
  }
`;

export const StyledContactForm = styled(Form)`
  position: relative;

  & .form-field {
    width: 100%;
    margin-bottom: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-bottom: 24px;
    }
  }

  & .ant-picker {
    width: 100%;
  }
`;

export const StyledContactFormHeader = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  & .dropzone {
    margin-bottom: 0;

    &:focus {
      outline: 0;
    }
  }
`;

export const StyledContactFormAvatar = styled(Avatar)`
  width: 55px;
  height: 55px;
  margin-bottom: 8px;
  cursor: pointer;
`;
export const StyledContactFormHeaderTitle = styled.h4`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledContactModalScrollbar = styled(AppScrollbar)`
  height: 400px;
`;
export const StyledContactFormContent = styled.div`
  position: relative;
`;
export const StyledContactFormContentItem = styled.div`
  padding: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;

export const StyledContactFormItemTitle = styled.h6`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 24px;
  }
`;

export const StyledContactFormContentField = styled.div`
  position: relative;
`;

export const StyledContactFormFooter = styled.div`
  padding: 16px 32px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 0 0 ${({ theme }) => theme.sizes.borderRadius.base}
    ${({ theme }) => theme.sizes.borderRadius.base};
  text-align: right;

  [dir='rtl'] & {
    text-align: left;
  }

  & .ant-btn {
    min-width: 100px;

    &:not(:first-child) {
      margin-left: 10px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const StyledContactFormBtn = styled(Button)`
  padding: 0 32px;
  height: 36px;
`;
