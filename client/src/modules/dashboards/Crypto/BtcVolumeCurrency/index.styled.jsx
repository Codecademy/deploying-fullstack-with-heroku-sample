import AppCard from '@crema/components/AppCard';
import { PieChart } from 'recharts';
import styled from 'styled-components';

export const StyledBtcGraph = styled(PieChart)`
  width: 220px !important;
  height: 220px !important;
  align-self: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 320px !important;
    height: 320px !important;
  }

  & .recharts-surface {
    width: 220px !important;
    height: 220px !important;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 320px !important;
      height: 320px !important;
    }
  }
`;

export const StyledBtcCard = styled(AppCard)`
  overflow: hidden;
  position: relative;
`;

export const StyledBtcFooter = styled.div`
  padding-top: 20px;
  margin-bottom: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 20px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 20px;
    }
  }
`;

export const StyledBtcItem = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  flex: 1;
  color: ${({ theme }) => theme.palette.text.secondary};

  & .dot {
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      height: 16px;
      width: 16px;
    }
  }
`;

export const StyledBtcItemTitle = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 0;
`;
