import { Avatar, List } from 'antd';
import styled from 'styled-components';

export const StyledMsgListItem = styled(List.Item)`
  padding: 8px 20px !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 0 none !important;
  white-space: inherit;
  line-height: 1.4;

  & .ant-list-item-meta {
    align-items: center;
  }
`;

export const StyledMsgAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledMsgListItemContent = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  flex: 1;

  & h3 {
    margin-bottom: 2px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    margin-bottom: 0;
  }

  & span {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;
