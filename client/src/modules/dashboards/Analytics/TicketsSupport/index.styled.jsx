import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledTicketSupportCard = styled(AppCard)`
  border-radius: ${({ theme }) => theme.cardRadius};
  overflow: hidden;

  & .ant-collapse-content > .ant-collapse-content-box {
    padding-left: 20px;
    padding-right: 20px;
  }

  & .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding-left: 20px;
    padding-right: 20px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    [dir='rtl'] & {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &
    .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow {
    left: 20px;

    [dir='rtl'] & {
      left: auto;
      right: 20px;
    }
  }

  & .ant-collapse-extra {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & .ant-card-actions {
    border-top: 0 none;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const StyledTicketSupportAction = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};

  & span {
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }
`;

export const StyledTicketSupportCollapse = styled.div`
  flex: 1;

  & .ant-progress-show-info .ant-progress-outer {
    margin-right: calc(-2em - 16px);
    padding-right: calc(2em + 16px);
  }

  & .ant-progress-text {
    margin-left: 16px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }
`;

export const StyledTicketSupportCollapseItem = styled.div`
  &:not(:last-child) {
    //margin-bottom: 16px;
  }
`;

export const StyledTicketSupportOpen = styled.span`
  margin-bottom: 4px;
`;
