import { Button, Card, Form } from 'antd';
import styled from 'styled-components';

export const StyledAuthWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledAuthCard = styled(Card)`
  max-width: 900px;
  min-height: 350px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 0 none;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    min-height: 450px;
  }

  & .ant-card-body {
    padding: 0;
    display: flex;
    flex: 1;
  }
`;

export const StyledAuthMainContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 40%;
    padding: 40px;
  }
`;

export const StyledAuthCardHeader = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 36px;
  }

  & img {
    cursor: pointer;
    height: 36px;
    margin-right: 10px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;

export const StyledAuthWellAction = styled.div`
  position: relative;
  padding: 24px;
  display: none;
  background-color: ${({ theme }) => theme.palette.gray[900]};
  color: white;
  font-size: ${({ theme }) => theme.font.size.base};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 60%;
    padding: 40px;
  }

  & h2 {
    color: white;
    font-size: 30px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledAuthWelContent = styled.div`
  max-width: 320px;
`;

export const StyledAuthReconContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & .ant-card-body {
    padding-top: 10px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding-top: 28px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding-top: 40px;
    }
  }
`;

export const StyledConfirmContent = styled.div`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.font.size.base};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 40px;
  }
`;

export const StyledConfirmCodeInput = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 40px;
  }

  & .react-code-input input {
    &:focus {
      outline: none;
    }
  }
`;

export const StyledConfirmBtn = styled(Button)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  width: 100%;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledResetForm = styled(Form)`
  position: relative;

  & .form-field {
    margin-bottom: 20px;

    & p {
      margin-bottom: 24px;
      font-size: ${({ theme }) => theme.font.size.base};
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
        font-size: ${({ theme }) => theme.font.size.lg};
      }
    }
  }

  & .ant-form-item-explain-error {
    text-align: left;

    [dir='rtl'] & {
      text-align: right;
    }
  }

  & .react-code-input input {
    &:focus {
      outline: none;
    }
  }
`;
