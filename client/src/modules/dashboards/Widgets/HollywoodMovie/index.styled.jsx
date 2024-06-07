import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledHollywordCard = styled(AppCard)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  position: relative;
  min-height: 320px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: inherit;
  }

  & > * {
    position: relative;
    z-index: 3;
  }

  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledHollywoodContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const StyledHollywoodContentAction = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHollywoodAvatar = styled.span`
  width: 50px;
  height: 50px;
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 110px;
    height: 110px;
  }

  & img {
    width: 100%;
  }
`;

export const StyledHollywoodFooter = styled.div`
  margin-top: 12px;
  position: absolute;
  bottom: 0;

  & h1 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 20px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      font-size: 24px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 30px;
    }
  }
`;
