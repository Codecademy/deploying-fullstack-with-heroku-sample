import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledRequestCard = styled(AppCard)`
  margin-bottom: 32px;

  & .ant-card-actions {
    background-color: transparent;
  }
`;

export const StyledRequestItem = styled.div`
  padding: 8px 20px;
  display: flex;
`;

export const StyledRequestItemInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  margin-left: 14px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }
`;

export const StyledRequestAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
  min-width: 36px;
`;

export const StyledRequestItemContent = styled.div`
  flex: 1;

  & h4 {
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.size.base};
    white-space: nowrap;
  }

  & p {
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
