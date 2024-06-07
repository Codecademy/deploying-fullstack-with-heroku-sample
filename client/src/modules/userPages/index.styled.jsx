import { Button, Card, Col, Form } from "antd";
import { rgba } from "polished";
import styled from "styled-components";

export const StyledUserPages = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & > div {
    flex: 1;
  }
`;

export const StyledUserContainer = styled.div`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const StyledUserCard = styled(Card)`
  max-width: 480px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  & .ant-card-body {
    padding: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding: 48px 64px;
    }
  }

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }
`;

export const StyledUserCardLgSpace = styled(StyledUserCard)`
  & .ant-card-body {
    padding: 32px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding: 48px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding: 48px 64px;
    }
  }
`;

export const StyledUserCardHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
  }

  & h3 {
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 20px;
  }
`;

export const StyledUserCardLogo = styled.div`
  margin-right: 8px;

  [dir="rtl"] & {
    margin-right: 0;
    margin-left: 8px;
  }

  & img {
    height: 24px;
  }
`;

export const StyledUserCardPara = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 48px;
  }
`;

export const StyledUserForm = styled(Form)`
  text-align: left;
  margin-bottom: 12px;

  [dir="rtl"] & {
    text-align: right;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }

  & .form-field {
    margin-bottom: 20px;
  }
`;

export const StyledUserFormBtn = styled(Button)`
  width: 100%;
`;

export const StyledUserFieldAction = styled(Form.Item)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  & .ant-form-item-row {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 26px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
  }

  & .ant-form-item-control-input {
    min-height: 10px;
  }

  & .ant-form-item-control-input-content {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const StyledUserFieldActionRow = styled(StyledUserFieldAction)`
  & .ant-form-item-control-input-content {
    flex-direction: row;
    align-items: center;
  }

  & .user-field-action-link {
    padding-top: 2px;
  }
`;

export const StyledUserFieldActionLink = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;

  &.ml-auto {
    margin-top: 8px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-left: auto;
      margin-top: 0;

      [dir="rtl"] & {
        margin-left: 0;
        margin-right: auto;
      }
    }
  }
`;

export const StyledUserCardFooter = styled.div`
  color: ${({ theme }) => theme.palette.gray[700]};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledUserCardFooterLink = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  display: inline-block;

  [dir="rtl"] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledUserCardFooterAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 16px;
  }

  & > span {
    color: ${({ theme }) => theme.palette.gray[600]};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-right: 16px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledUserSocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    justify-content: flex-start;
  }

  & button {
    background-color: transparent;
    box-shadow: none;
    border: 0 none;
    padding: 5px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    min-width: 36px;
    height: 36px;

    &:hover {
      background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.04)};
    }

    &:focus {
      background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.15)};
    }

    &:after {
      box-shadow: none;
    }

    & .anticon {
      font-size: ${({ theme }) => theme.font.size.base};
      display: block;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        font-size: ${({ theme }) => theme.font.size.lg};
      }

      & svg {
        display: block;
      }
    }
  }
`;

export const StyledUserCardForPass = styled(StyledUserCard)`
  max-width: 900px;
  & .ant-card-body {
    padding: 0;

    & > .ant-row {
      margin: 0 !important;
    }

    & > .ant-row > .ant-col {
      padding: 0 !important;
    }
  }

  & .user-styled-img {
    padding-right: 0;
    height: 100%;
    object-fit: cover;

    [dir="rtl"] & {
      padding-left: 0;
    }
  }
`;

export const StyledUserStyledImg = styled.div`
  height: 400px;
  width: 100%;
  display: inline-block;
  object-fit: contain;

  & img {
    fill: ${({ theme }) => theme.palette.primary.main};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-right: 40px;

    [dir="rtl"] & {
      padding-right: 0;
      padding-left: 40px;
    }
  }

  &.mln {
    margin-left: -32px;

    [dir="rtl"] & {
      margin-left: 0;
      margin-right: -32px;
    }
  }
`;

export const StyledUserStyledForPass = styled.div`
  padding: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 48px 64px;
  }
`;

export const StyledUserCardLg = styled(StyledUserCard)`
  max-width: 900px;
`;

export const StyledUserStyledResetImgCol = styled(Col)`
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    align-self: center;
  }
`;

export const StyledUserStyledImgAuto = styled(StyledUserStyledImg)`
  height: auto;
`;

export const StyledUserCardUnlock = styled(StyledUserCardLg)`
  & .ant-card-body {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding: 48px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding-left: 32px;
      padding-right: 64px;

      [dir="rtl"] & {
        padding-left: 64px;
        padding-right: 32px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding-left: 80px;
      padding-right: 80px;
    }
  }

  & .user-styled-img {
    padding-right: 0;

    & svg {
      fill: ${({ theme }) => theme.palette.primary.main};
    }

    [dir="rtl"] & {
      padding-left: 0;
    }
  }
`;
