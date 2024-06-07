import styled from 'styled-components';
import { Button, Card } from 'antd';
import { darken } from 'polished';

export const StyledUserStandardCard = styled(Card)`
  margin-bottom: 32px;
  overflow: hidden;

  & .ant-card-body {
    padding: 0;
  }
`;

export const StyledUserStandardInner = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const StyledUserStandardCardHeader = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 200px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 256px;
  }

  & h3 {
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    width: 100%;
    text-align: center;
    color: white;
  }
`;

export const StyledUserStandardCardAvatar = styled.div`
  margin-bottom: 12px;

  & .ant-avatar {
    height: 85px;
    width: 85px;
  }
`;

export const StyledUserStandardChip = styled.span`
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 6.6px 16px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  border-radius: 30px;
  display: inline-block;
`;

export const StyledUserStandardContent = styled.div`
  padding: 20px;
  flex: 1;
`;

export const StyledUserStandardContentHeader = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.gray[600]};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledUserStandardContentHeaderContact = styled.div`
  margin-left: -12px;
  margin-right: -12px;
  color: ${({ theme }) => theme.palette.text.primary};
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.size.base};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-right: 128px;
    font-size: ${({ theme }) => theme.font.size.lg};

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 128px;
    }
  }
`;

export const StyledUserStandardContactItem = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  & span:last-child {
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  & .anticon {
    font-size: 20px;
  }
`;

export const StyledUserStandardHeaderSocial = styled.div`
  margin-left: -4px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 20px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: -4px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 24px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 24px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: -16px;
    padding-left: 40px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: -16px;
      padding-left: 0;
      padding-right: 40px;
    }
  }
`;

export const StyledUserStandardHeaderSocialItem = styled.span`
  margin-left: 4px;
  margin-right: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const StyledUserStandardPara = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 16px;
  font-weight: ${({ theme }) => theme.font.weight.light};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-right: 24px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 24px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-right: 64px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 64px;
    }
  }
`;

export const StyledUserStandardFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & .user-standard-footer-chip-view {
    margin-left: -4px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: -4px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-left: -8px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: -8px;
      }
    }
  }

  & .user-standard-footer-chip {
    background-color: ${({ theme }) =>
      darken(0.066, theme.palette.background.paper)};
    padding: 6px 24px;
    margin: 8px 4px 0;
    border: 1px solid
      ${({ theme }) => darken(0.38, theme.palette.background.paper)};
    border-radius: 2px;
    display: inline-block;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-right: 8px;
      margin-left: 8px;
    }

    &.dark {
      background-color: ${({ theme }) => theme.palette.gray[700]};
    }
  }
`;

export const StyledFooterAction = styled.div`
  position: relative;
`;

export const StyledUserFooterHireBtn = styled(Button)`
  margin-right: 20px;
  margin-top: 8px;
  padding: 9px 12px;
  width: 96px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1;
  height: 32px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 20px;
  }
`;

export const StyledUserFooterRemoveBtn = styled(Button)`
  background-color: white;
  color: ${({ theme }) => theme.palette.gray[500]};
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.palette.gray[500]};
  padding: 9px 12px;
  width: 96px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1;
  height: 32px;
`;

export const StyledUserStandard = styled.div`
  flex: 1;
`;
