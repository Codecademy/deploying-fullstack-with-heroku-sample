import styled from 'styled-components';

export const StyledContactAddress = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-left: 20px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 20px;
    }
  }
`;

export const StyledContactAddressItem = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 14px 20px;

  & p {
    margin-bottom: 0;
  }
`;

export const StyledAvatarIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;
    width: 48px;
    height: 48px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & svg {
    font-size: 20px;
  }
`;
