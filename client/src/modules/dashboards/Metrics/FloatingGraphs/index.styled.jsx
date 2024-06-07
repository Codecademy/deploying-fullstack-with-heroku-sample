import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledFloatingGraphCard = styled(AppCard)`
  text-align: center;
  overflow: hidden;

  & p {
    margin-bottom: 12px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledFloatingCardTitle = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;

export const StyledFloatingGraphCardTitleValue = styled.span`
  padding-left: 12px;
  padding-right: 12px;
`;

export const StyledFloatingGraphCardTitleGrowth = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.green[5]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-top: 4px;
  font-size: ${({ theme }) => theme.font.size.lg};

  &.down {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const StyledFloatingGraphArrow = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.lg};
`;
export const StyledFloatingGraphGrowthValue = styled.span`
  margin-left: 4px;
  margin-bottom: 4px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 4px;
  }
`;

export const StyledFloatingGraph = styled.div`
  margin: -8px -20px -20px;
`;
