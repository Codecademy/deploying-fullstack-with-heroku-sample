import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledDayTempItem = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;

  & p {
    margin-bottom: 12px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-transform: uppercase;
  }

  & span {
    display: inline-block;
  }
`;

export const StyledTempCard = styled(AppCard)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledTempHeaderColor = styled.div`
  padding: 20px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.cyan[7]};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledTempHeader = styled.div`
  display: flex;
  align-items: center;

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-bottom: 0;
  }
`;

export const StyledTempHeaderAction = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  & .anticon {
    font-size: 18px;
  }
`;

export const StyledTempHeaderContent = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & h1 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 24px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin: 0 0 0.5em;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      font-size: 36px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 64px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 96px;
    }
  }

  & p {
    display: flex;
    align-items: center;

    & img {
      margin-right: 12px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 12px;
      }
    }
  }
`;

export const StyledTempContent = styled.div`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
`;
