import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledStatsGraphPara = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const StyledStatsGraphCard = styled(AppCard)`
  overflow: hidden;
`;

export const StyledStatsCardwithGraph = styled.div`
  position: relative;
`;

export const StyledStatsCardwithGraphContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.palette.text.primary};

  [dir='rtl'] & {
    left: auto;
    right: 0;
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-bottom: 24px;
    }
  }

  & h3 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledStatsCardGraph = styled.div`
  margin-right: -32px;
  margin-bottom: -40px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: -32px;
  }
`;
