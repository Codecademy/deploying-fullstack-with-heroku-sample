import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledBirthdayCard = styled(AppCard)`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledBirthdayHeader = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.blue[7]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 28px;
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-bottom: 0;
  }
`;

export const StyledBirthdayContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-top: 28px;
    padding-bottom: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const StyledBirthThumb = styled.div`
  margin-bottom: 16px;
`;
