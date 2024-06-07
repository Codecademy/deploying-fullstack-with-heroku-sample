import styled from 'styled-components';

export const StyledProjectWrapper = styled.div`
  position: relative;
  padding-left: 28px;
  padding-right: 28px;
`;

export const StyledProjectDescription = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.dividerColor};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-bottom: 28px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: 60px;
    margin-bottom: 60px;
  }
`;

export const StyledTitleWrapper2 = styled.h2`
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
    margin-bottom: 14px;
  }
`;

export const StyledServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.dividerColor};
`;

export const StyledServiceTitle = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-top: 8px;
    padding-bottom: 8px;
    min-width: 150px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    min-width: 100px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    min-width: 150px;
  }
`;

export const StyledSecondaryText = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  flex: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

export const StyledSecondaryText2 = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.sm};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-left: 14px;
    padding-right: 14px;
    margin-bottom: 12px;
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 20px;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const StyledTitle4 = styled.h4`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 20px;
  }
`;

export const StyledFlex = styled.h4`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: column;
    margin-left: -14px;
    margin-right: -14px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: row;
    margin-left: -20px;
    margin-right: -20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    flex-direction: row;
    margin-left: -28px;
    margin-right: -28px;
  }
`;

export const StyledButton = styled.a`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.primary.main} !important;
  text-transform: uppercase;
  text-decoration: underline;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
