import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledTaskListScrollbar = styled(AppScrollbar)`
  height: 220px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    height: 320px;
  }
`;

export const StyledTaskListItem = styled(List.Item)`
  padding: 8px 20px !important;
  border-bottom: 0 none !important;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;

  & h3 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
  }
`;
