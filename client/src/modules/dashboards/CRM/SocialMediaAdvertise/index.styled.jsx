import styled from 'styled-components';

export const StyledSocialMediaGraph = styled.div`
  margin-top: 20px;
`;

export const StyledSocialMediaAdvertise = styled.div`
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  margin-left: -8px;
  margin-right: -8px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: -12px;
    margin-right: -12px;
  }
`;

export const StyledSocialMediaAdvertiseItem = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 12px;
    padding-right: 12px;
  }

  & h4 {
    margin-bottom: 4px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 18px;
  }

  & .dot {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: ${({ theme }) => theme.font.size.sm};
    margin-bottom: 4px;
  }
`;

export const StyledSocialMediaAdvName = styled.p`
  text-transform: capitalize;
`;

export const StyledSocialMediaAdvValue = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 13px;
`;
