import styled from 'styled-components';

export const StyledCloseBtn = styled.div`
  margin-left: 12px;
  padding-top: 1px;
  cursor: pointer;
`;

export const StyledAddItem = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;
  width: fit-content;
`;

export const StyledSecondary = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const StyledSecondaryText = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
`;
