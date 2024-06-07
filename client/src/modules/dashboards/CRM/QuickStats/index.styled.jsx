import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledStatsCard = styled(AppCard)`
  border-radius: ${({ theme }) => theme.cardRadius};
`;

export const StyledStatsRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStatsAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  min-width: 50px;
  background: none;
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;
    height: 60px;
    width: 60px;
    min-width: 60px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledStatsContent = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};

  h3 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 0;
  }

  & P {
    margin-bottom: 0;
  }
`;

export const StyledStatsIcon = styled.div`
  font-size: 30px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: 40px;
  }
`;
