import styled from 'styled-components';

export const StyledProductDetails = styled.div`
  position: relative;
  padding-bottom: 15px;
`;

export const StyledProductDetailHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  margin-bottom: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: column;
  }
`;
export const StyledProductDetailHeaderInfo = styled.div`
  position: relative;
  flex: 1;

  & h3 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 4px;
  }
`;

export const StyledProductDetailHeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & .ant-rate {
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 6px;
  }

  & > span {
    margin-bottom: 6px;
  }
`;

export const StyledProfileReviewText = styled.span`
  margin-left: 8px;
  margin-right: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};

  [dir='rtl'] & {
    margin-left: 16px;
    margin-right: 8px;
  }
`;
export const StyledProfileMbText = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledProductDetailSocial = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-top: 10px;
  }

  & .react-share__ShareButton {
    margin-right: 0 !important;
    margin-left: 12px !important;

    [dir='rtl'] & {
      margin-right: 12px !important;
      margin-left: 0 !important;
    }
  }
`;
