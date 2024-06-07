import { Button, Form } from "antd";
import styled from "styled-components";

export const StyledErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const StyledErrorImageLg = styled.div`
  width: 100%;
  margin-bottom: 16px;
  max-width: 300px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 400px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
    max-width: 500px;
  }

  & img {
    width: 100%;
    height: 400px;
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledErrorContent = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }

  & h3 {
    margin-bottom: 12px;
    font-size: 20px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      font-size: 22px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-bottom: 40px;
      font-size: 24px;
    }
  }

  &-lg {
    margin-bottom: 32px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-bottom: 64px;
    }
  }
`;

export const StyledErrorPara = styled.div`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.gray[600]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 40px;
  }
`;

export const StyledErrorButton = styled(Button)`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.lg};
  text-transform: capitalize;
`;

export const StyledErrorImage = styled.div`
  width: 100%;
  margin-bottom: 16px;
  max-width: 200px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 300px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
    max-width: 706px;
  }

  & img {
    width: 100%;
    height: 400px;
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledErrorFormComing = styled.div`
  max-width: 384px;
  margin: 0 auto 20px;
`;

export const StyledErrorForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  text-align: left;

  [dir="rtl"] & {
    text-align: right;
  }

  & .form-field {
    margin-bottom: 20px;
  }
`;
