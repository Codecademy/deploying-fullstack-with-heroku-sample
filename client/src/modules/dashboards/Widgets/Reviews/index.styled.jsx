import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledReviewScrollbar = styled(AppScrollbar)`
  height: 345px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    height: 300px;
  }
`;

export const StyledReviewItem = styled(List.Item)`
  border-bottom: 0 none !important;
  font-size: ${({ theme }) => theme.font.size.base};
  padding: 8px 20px !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 4px;
  }
`;

export const StyledReviewItemHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const StyledItemBy = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledReviewBy = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;
