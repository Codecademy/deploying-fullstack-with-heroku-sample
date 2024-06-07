import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledListItem = styled.div`
  border: 0 none !important;
  cursor: pointer;
  margin-bottom: 1px;

  & a {
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    align-items: center;
    padding: 8.5px 16px;
    margin-right: 20px;
    border-radius: 0 ${({ theme }) => theme.cardRadius30}
      ${({ theme }) => theme.cardRadius30} 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding: 8.5px 20px;
    }

    &:hover,
    &:focus,
    &.active {
      color: ${({ theme }) => theme.palette.primary.main};
      background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
    }

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
      border-radius: ${({ theme }) => theme.cardRadius30} 0 0
        ${({ theme }) => theme.cardRadius30};
    }
  }
`;

export const StyledListItemIcon = styled.span`
  font-size: 18px;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 20px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }

  & > svg {
    display: block;
  }
`;

export const StyledListItemText = styled.span`
  font-size: 15px;
`;
