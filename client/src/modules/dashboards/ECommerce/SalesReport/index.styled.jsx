import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledContent = styled.div`
  align-items: center;
  flex-wrap: wrap;
  margin-right: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
  }
`;

export const StyledPrimaryText = styled.span`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledSecondaryText = styled.span`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledDotAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  line-height: 1px;
  padding-bottom: 2px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
  &:not(:first-of-type) {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid
      ${({ theme }) => rgba(theme.palette.text.secondary, 0.2)};
  }
  & .dot-icon {
    height: 10px;
    width: 10px;
    margin-right: 4px;
    margin-top: 3px;
    border-radius: 50%;
  }
`;
