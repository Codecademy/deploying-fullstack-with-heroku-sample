import styled from 'styled-components';

export const StyledInnovation = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 28px;
    padding-left: 28px;
    padding-left: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 60px;
    padding-left: 60px;
    padding-left: 60px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 80px;
    padding-left: 80px;
  }
`;

export const StyledTitle3 = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 18px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 22px;
  }
`;

export const StyledTitle5 = styled.h5`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  margin-bottom: 6px;
  margin-bottom: 0;
`;
export const StyledTitlewrapper5 = styled.h5`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 18px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-width: 400px;
    margin-left: 28px;
  }
`;

export const StyledSecondaryText = styled.div`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.palette.text.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 28px;
  }
`;

export const StyledInnovationImgWrapper = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 12px;
    padding-bottom: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding-left: 17px;
  }

  & > img {
    width: 100%;
    min-height: 300px;
    object-fit: cover;
    display: block;
  }

  & .innovation-img-content {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.palette.red[6]};
    color: ${({ theme }) => theme.palette.white};
    max-width: 260px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      padding: 20px 24px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      padding: 36px 40px;
    }
  }
`;
