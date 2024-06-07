import styled from 'styled-components';

export const StyledAppCard = styled.div`
  padding: 14px;
  background-color: #0a8fdc4d;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 16px;
  border-radius: 16px;
`;

export const StyledImgWrapper = styled.div`
  width: 46px;
  height: 46px;
  margin-right: 14px;

  & img {
    width: 100%;
  }
`;

export const StyledTextContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% - 60px);

  h2 {
    font-size: 20px !important;
    margin-bottom: 0 !important;
    font-weight: ${({ theme }) => theme.font.weight.medium}!important;
  }
`;

export const StyledSuccessTag = styled.span`
  border-radius: 30px;
  font-size: 12px;
  display: flex;
  padding: 3px 6px 3px 8px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background-color: ${({ theme }) => theme.palette.white};
  color: #11c15b;

  .anticon {
    margin-left: 4px;
  }
`;

export const StyledFailTag = styled.span`
  border-radius: 30px;
  font-size: 12px;
  display: flex;
  padding: 3px 6px 3px 8px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background-color: ${({ theme }) => theme.palette.white};
  color: #f04f47;

  .anticon {
    margin-left: 4px;
  }
`;

export const StyledButtonText = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-left: 5px;
  position: relative;
  top: -6px;
`;
