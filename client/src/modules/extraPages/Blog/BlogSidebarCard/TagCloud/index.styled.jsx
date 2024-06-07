import styled from 'styled-components';

export const StyledTitle3 = styled.h3`
  margin-top: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -4px;
`;

export const StyledContainer = styled.div`
  padding-right: 4px;
  padding-left: 4px;
  margin-bottom: 10px;
`;

export const StyledWrapper = styled.span`
  border-radius: 28px;
  font-size: ${({ theme }) => theme.font.size.base};
  border: 1px solid ${({ theme }) => theme.palette.dividerColor};
  display: block;
  padding: 9px 20px 11px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
