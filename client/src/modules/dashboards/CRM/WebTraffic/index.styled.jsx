import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledWebTrafficCard = styled(AppCard)`
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 32px;
  }
`;

export const StyledWebTrafficContent = styled.div`
  padding-top: 16px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

export const StyledWebTrafficItem = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};

  & h4 {
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 20px;
    }
  }
`;
