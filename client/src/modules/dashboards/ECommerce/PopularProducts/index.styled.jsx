import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledPopularScrollbar = styled(AppScrollbar)`
  height: 280px;
`;

export const StyledPowerGrid = styled(List)`
  position: relative;
  & .ant-list-items {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledProductCell = styled(List.Item)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 20px !important;
  border-bottom: 0 none !important;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 50%;
  }

  & .ant-avatar {
    height: 70px;
    width: 70px;
    border-radius: 4px;
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledProductCellContent = styled.div`
  flex: 1;

  & h3 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 4px;
  }

  & .price {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.text.primary};

    & span {
      margin-left: 12px;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.palette.text.secondary};

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 12px;
      }
    }
  }
`;
