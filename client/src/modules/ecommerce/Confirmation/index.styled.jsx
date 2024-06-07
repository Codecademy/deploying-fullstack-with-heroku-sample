import AppCard from '@crema/components/AppCard';
import { Button } from 'antd';
import styled from 'styled-components';

export const StyledConfirmationCard = styled(AppCard)`
  margin-bottom: 24px;

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }
`;

export const StyledConfirmationItem = styled.div`
  padding: 16px;

  & h3 {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & h4 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & + & {
    padding-top: 0;
  }

  & p:last-child {
    margin-bottom: 0;
  }
`;

export const StyledConfirmationReward = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 16px;
  padding-bottom: 16px;

  & + .confirmation-address-reward {
    padding-top: 0;
  }
`;

export const StyledConfirmationRewardRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;
export const StyledConfirmationRewardTitle = styled.p`
  margin-bottom: 0;
  margin-left: 14px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }
`;

export const StyledConfirmationRewardButton = styled(Button)`
  min-width: 120px;
  margin-bottom: 4px;
`;

export const StyledConfirmationView = styled.div`
  position: relative;
`;

export const StyledConfirmationListCard = styled(AppCard)`
  position: relative;
  margin-bottom: 15px;

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }
`;

export const StyledConfirmationListItem = styled.div`
  display: flex;
  padding: 12px 16px;
`;

export const StyledConfirmationListItemContent = styled.div`
  margin-left: 14px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }

  & h3 {
    font-size: 15px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledConfirmationListItemAction = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  & h3 {
    margin-bottom: 16px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;
export const StyledConfirmationActionBtnView = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledConfirmationActionBtn = styled(Button)`
  & + & {
    margin-left: 16px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }
`;
export const StyledConfirmationActionPara = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  & img {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }
`;

export const StyledOrderPlacedInfo = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
`;

export const StyledOrderPlacedContent = styled.div`
  padding: 16px;

  & h3 {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

export const StyledOrderPlacedAction = styled.div`
  display: flex;
  padding: 16px;
`;

export const StyledOrderPlacedActionThumb = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledLinkBtn = styled(Button)`
  & a {
    color: ${({ theme }) => theme.palette.white};
  }
`;
