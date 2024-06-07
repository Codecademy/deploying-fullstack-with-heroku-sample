import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledMetricSalesCard = styled(AppCard)`
  overflow: hidden;

  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }

  & h2 {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 38px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 36px;
    }
  }

  & p {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const StyledMetricSalesGraph = styled.div`
  margin-top: auto;
`;
