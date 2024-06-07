import styled from 'styled-components';

export const StyledCremaCardHeader = styled.div`
  margin-bottom: 16px;
  margin-top: 4px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 24px;
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  width: calc(100% - 25px);

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 8px;
  }
`;

export const StyledCremaLogo = styled.div`
  width: 40px;
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 14px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 14px;
    }
  }

  & img {
    width: 100%;
  }
`;

export const StyledCremaUserInfoContent = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  width: calc(100% - 56px);

  & p {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-bottom: 0;
  }
`;

export const StyledCremaTitle = styled.h4`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.lg};
  letter-spacing: 0.1em;
  margin-bottom: 2px;
`;

export const StyledSocialLink = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-size: 20px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledCremaPara = styled.p`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  margin-bottom: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 16px;
  }
`;
