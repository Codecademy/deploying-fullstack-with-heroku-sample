import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const StyledLangBtn = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.lg};
  border-radius: 0;
  padding: 2px 12px 18px 12px;
  color: ${({ theme }) => theme.palette.text.primary};
  text-transform: capitalize;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: transparent;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-transform: uppercase;
    margin-top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: ${({ theme }) =>
      theme.palette.background.default} !important;
    color: ${({ theme }) => theme.palette.text.secondary} !important;
    padding: 9px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    border: 1px solid transparent;
    margin-left: 7.4px;
    margin-right: 7.4px;
    line-height: 1;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.palette.text.primary};
      background-color: ${({ theme }) =>
        lighten(0.005, theme.palette.background.default)};

      border-color: ${({ theme }) =>
        darken(0.1, theme.palette.background.default)};
    }
  }
`;

export const StyledLangText = styled.span`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: inline-block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

export const StyledLangIcon = styled.span`
  position: relative;
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export const StyledLangItem = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & h4 {
    margin-left: 16px;
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      font-size: ${({ theme }) => theme.font.size.lg};
    }
  }
`;
