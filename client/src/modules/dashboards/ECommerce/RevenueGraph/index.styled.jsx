import styled from 'styled-components';

export const StyledPadding = styled.div`
  padding: 0px 20px;
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h5`
  margin-right: 4px;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledContent = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
