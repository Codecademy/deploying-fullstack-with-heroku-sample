import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledDrCard = styled(AppCard)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledDrCardInfo = styled.div`
  display: flex;
`;

export const StyledDrThumb = styled.div`
  align-self: center;
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledDrCardContent = styled.div`
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
`;

export const StyledDrCardContentMain = styled.div`
  flex: 1;
  overflow: hidden;
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  & h5 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 2px;
  }

  & p {
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledDrTime = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  justify-content: center;
  width: 50px;
  height: 50px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.paper};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  @media screen and (max-width: 1600px) and (min-width: 1200px) {
    display: none;
  }
`;
