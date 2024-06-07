import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledComparisionCard = styled(AppCard)`
  overflow: hidden;
`;

export const StyledComparisionCardInfo = styled.div`
  position: relative;
`;

export const StyledComparisionCardContent = styled.div`
  padding: 20px 24px;
  position: absolute;
  top: 0;
  left: 0;

  [dir='rtl'] & {
    left: auto;
    right: 0;
  }

  & p {
    margin-bottom: 16px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  & h3 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledComparisionCardGraphView = styled.div`
  position: relative;
  margin-bottom: -16px;
  padding-top: 16px;
`;
