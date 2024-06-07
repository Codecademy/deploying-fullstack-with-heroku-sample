import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledClientLogo = styled.div`
  min-height: 140px;
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center padding 8px;

  img {
    margin: auto;
  }
`;

export const StyledAppCard = styled(AppCard)`
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;
export const StyledClient = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-top: 1px solid ${({ theme }) => theme.palette.dividerColor};
  border-right: 1px solid ${({ theme }) => theme.palette.dividerColor};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 50%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 33.33%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 25%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 20%;
  }
`;

export const StyledClientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -1px;
  margin-right: -1px;
`;
