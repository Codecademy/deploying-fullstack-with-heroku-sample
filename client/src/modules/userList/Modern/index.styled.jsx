import styled from 'styled-components';
import { Button, Card } from 'antd';
import { darken } from 'polished';

export const StyledUserModernCard = styled(Card)`
  margin-bottom: 20px;

  & .ant-card-body {
    padding: 20px;
  }
`;
export const StyledUserModernRow = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const StyledUserModernThumb = styled.div`
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 0;
    margin-right: 20px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }

  & img {
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    width: 100%;
    height: 180px;
    object-fit: cover;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 130px;
      height: 130px;
    }
  }
`;

export const StyledUserModernContent = styled.div`
  flex: 1;
`;

export const StyledUserModernHeader = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }

  & h3 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-bottom: 0;
    }
  }
`;

export const StyledUserModernHeaderAction = styled.div`
  margin-left: -16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.text.secondary};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: -16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: auto;
    margin-right: -16px;
    justify-content: flex-end;

    [dir='rtl'] & {
      margin-left: -16px;
      margin-right: auto;
    }
  }
`;

export const StyledUserModernHeaderActionItem = styled.span`
  margin-left: 16px;
  margin-right: 16px;
  font-size: 20px;
`;

export const StyledUserModernPara = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 16px;

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

export const StyledUserModernFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledUserModernFooterChipView = styled.div`
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
`;
export const StyledUserModernFooterChip = styled.div`
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
`;

export const StyledUserFooterAction = styled.div`
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

export const StyledUserModern = styled.div`
  flex: 1;
`;
