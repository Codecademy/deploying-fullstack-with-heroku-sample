import styled from 'styled-components';

export const StyledPrimaryText = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledSecondaryText = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  max-width: 500px;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
