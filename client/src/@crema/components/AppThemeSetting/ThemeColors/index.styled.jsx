import styled from 'styled-components';

export const StyledThemeColorSetting = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
    padding-bottom: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding-bottom: 30px;
      margin-bottom: 30px;
    }
  }
`;

export const StyledThemeColorSettingTitle = styled.h4`
  margin-bottom: 16px;
`;
