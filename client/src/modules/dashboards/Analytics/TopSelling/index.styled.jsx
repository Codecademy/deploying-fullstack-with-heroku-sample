import AppCard from '@crema/components/AppCard';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledTopSellingCard = styled(AppCard)`
  & .ant-card-actions {
    border-top: 0 none;
    padding-left: 20px;
    padding-right: 20px;
    background-color: transparent;

    & li {
      color: ${({ theme }) => theme.palette.secondary.main};
      text-align: left;

      [dir='rtl'] & {
        text-align: right;
      }
    }
  }
`;

export const StyledTopSellingCell = styled(List.Item)`
  display: flex;
  align-items: center;
  padding: 8px 20px !important;
  border-bottom: 0 none !important;
`;

export const StyledTopSellingCellInfo = styled.div`
  display: flex;
`;

export const StyledTopSellingCellImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledTopSellingCellContent = styled.div`
  flex: 1;

  & h3 {
    color: ${({ theme }) => theme.palette.primary.main};
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 4px;
  }
`;

export const StyledTopSellingPrice = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledTopSellingCellAction = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    display: none;
  }
`;

export const StyledTopSellingCellActionInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding: 8px 0 8px 8px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;
  }
`;

export const StyledTopSellingCellActionIcon = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.gray[400]};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;
