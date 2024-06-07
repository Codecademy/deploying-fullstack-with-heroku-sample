import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledCard = styled(AppCard)`
  color: ${({ theme }) => theme.palette.text.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 28px;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.palette.red[6]};
  border: 1px solid ${({ theme }) => theme.palette.red[6]};
  border-radius: 4px;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;

  & svg {
    display: block;
    margin-top: 4px;
    margin-right: 4px;
  }
`;

export const StyledBlogPostWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 15px;
  }
`;

export const StyledFlexWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 40px;
  }
`;

export const StyledSvgWrapper = styled.div`
  font-size: 20px;
`;

export const StyledSocialFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-left: -8px;
    margin-right: -8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-left: -16px;
    margin-right: -16px;
  }
`;

export const StyledSocialWrapper = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
