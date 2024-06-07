import AppCard from '@crema/components/AppCard';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledTotalRevnueCard = styled(AppCard)`
  overflow: hidden;
  height: calc(100% - 38px);

  & .ant-card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const StyledRevenueRow = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const StyledRevenueContent = styled.div`
  margin-right: 8px;
  background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
  display: flex;
  padding: 20px;
  flex-direction: column;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-right: 40px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 40px;
    }
  }

  & h3 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    margin-bottom: 3px;
  }

  & p {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledRevenueContentTop = styled.div`
  margin-bottom: 16px;
`;

export const StyledRevenueContentBottom = styled.div`
  display: flex;
  margin: auto -8px 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: -20px;
    margin-right: -20px;
  }
`;

export const StyledRevenueContentItem = styled.div`
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const StyledRevenueGraph = styled.div`
  margin-left: auto;
  margin-bottom: -24px;
  width: 100%;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: -8px;
  }
`;
