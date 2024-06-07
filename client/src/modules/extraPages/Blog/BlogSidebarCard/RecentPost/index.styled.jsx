import styled from 'styled-components';

export const StyledRecentPost = styled.div`
  margin-bottom: 22px;
  border-top: 1px solid ${({ theme }) => theme.palette.dividerColor};
`;

export const StyledTitle3Non = styled.h3`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledTitle3 = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledContainer = styled.div`
  position: relative;

  & .recent-post-item {
    margin-bottom: 20px;
    &.last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  margin-right: 12px;
  max-width: 100px;

  & img {
    width: 100%;
    display: block;
    border-radius: 4px;
  }
`;

export const StyledTitle4 = styled.h4`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 10px;
`;

export const StyledSecondaryText = styled.div`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledSecondaryText2 = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.text.secondary};

  p {
    margin-bottom: 0;
  }
`;

export const StyledText = styled.span`
  margin-left: 8px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
