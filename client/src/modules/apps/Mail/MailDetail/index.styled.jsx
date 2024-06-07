import AppIconButton from "@crema/components/AppIconButton";
import { Avatar, Button, Form, Input } from "antd";
import { rgba } from "polished";
import styled from "styled-components";

export const StyledMailDetail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledMailDetailArrow = styled(AppIconButton)`
  margin-left: -10px;
  margin-right: 10px;

  [dir='rtl'] & {
    margin-left: 10px;
    margin-right: -10px;
  }
`;

export const StyledMailDetailActionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledMailDetailForm = styled(Form)`
  margin-top: 16px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 8px;

  & .ant-form-item {
    margin-bottom: 16px;
  }

  & .ql-editor.ql-blank:before {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const StyledMailDetailInput = styled(Input)`
  position: relative;

  & .ant-input-prefix {
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;

export const StyledMailFormFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMailDetailBtn = styled(Button)`
  padding-left: 32px;
  padding-right: 32px;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary.main};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledMailDetailFormFooter = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledMailDescPopBody = styled.div`
  position: relative;
`;

export const StyledMailDescItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const StyledMailDescName = styled.span`
  width: 80px;
  color: ${({ theme }) => theme.palette.text.disabled};
  text-align: right;
  padding-right: 15px;

  [dir='rtl'] & {
    text-align: left;
    padding-right: 0;
    padding-left: 15px;
  }
`;

export const StyledMailDetailUserDesc = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 0;

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

export const StyledMailDetailMsgContent = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
    margin-bottom: 10px;
  }
`;

export const StyledMailDetailBodyHeader = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 12px;
    flex-direction: row;
    align-items: center;
  }

  & h3 {
    margin-bottom: 2px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;

export const StyledMailDetailUser = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: calc(100% - 250px);
  }
`;

export const StyledMailDetailAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  margin-right: 14px;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.lg};
  align-items: center;
  justify-content: center;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }
`;

export const StyledMailDetailUserContent = styled.div`
  position: relative;
  width: calc(100% - 55px);
`;

export const StyledMailDetailBreakAll = styled.span`
  word-break: break-all;
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const StyledMailDetailBodyHeaderAction = styled.div`
  margin-top: 12px;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.sm};
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-left: auto;
    margin-top: 0;
    justify-content: flex-end;
    width: 250px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: auto;
    }
  }
`;

export const StyledMailDetailDate = styled.span`
  margin-bottom: 2px;
`;

export const StyledMailDetailSubjectHeaderAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-left: 12px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 12px;
    }
  }
`;

export const StyledMailDetailDesc = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};

  & p {
    margin-bottom: 12px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-bottom: 20px;
    }
  }
`;

export const StyledMailDetailBody = styled.div`
  padding: 24px;
`;
export const StyledMailDetailBodyContent = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
`;
export const StyledMailModalSuffix = styled.span`
  position: relative;

  & > span {
    cursor: pointer;
    margin-left: 16px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }
`;
