import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledRecentNews = styled(AppCard)`
  position: relative;

  & .ant-card-actions {
    background-color: transparent;
  }
`;

export const StyledRecentNewsLink = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
`;

export const StyledRecentNewsItem = styled.div`
  display: flex;
  padding: 8px 20px;
`;

export const StyledNewsAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
  min-width: 36px;
`;

export const StyledRecentNewsItemContent = styled.div`
  margin-left: 14px;
  flex: 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }

  & h4 {
    margin-bottom: 2px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledRecentNewsItewLink = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;
