import { Card, List } from 'antd';
import styled from 'styled-components';

export const StyledFaqList = styled.div`
  width: 100%;
  height: 100%;

  & .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  & .ant-collapse-content {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledFaqSidebarListItem = styled(List.Item)`
  padding: 10px 0;
  border-bottom: 0 none !important;
  justify-content: flex-start;
  cursor: pointer;

  & .anticon {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.palette.primary.main} !important;

    & .anticon {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledFaqSidebarIcon = styled.span`
  margin-right: 12px;
  color: ${({ theme }) => theme.palette.text.primary};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledFaqSidebarCard = styled(Card)`
  & .ant-card-body {
    padding: 20px;
  }

  & h3 {
    margin-bottom: 16px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

export const StyledFaqSidebarList = styled(List)`
  padding: 0;
`;

export const StyledFaqSection = styled.div`
  width: 100%;
`;

export const StyledFaqHeader = styled.div`
  width: 100%;
  min-height: 224px;
  padding: 20px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.palette.blue[5]};
  border-radius: ${({ theme }) => theme.cardRadius};
  color: ${({ theme }) => theme.palette.background.paper};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.size.lg};

  & h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.background.paper};
  }
`;
