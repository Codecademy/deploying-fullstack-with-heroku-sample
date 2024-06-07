import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledReviewsCard = styled(AppCard)`
  background-color: ${({ theme }) => theme.palette.cyan[7]};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  overflow: hidden;
`;

export const StyledReviewContent = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    margin-bottom: 4px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  & h4 {
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.palette.green[3]};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 20px;
    }
  }
`;

export const StyledReviewGraph = styled.div`
  margin-bottom: -64px;
`;
