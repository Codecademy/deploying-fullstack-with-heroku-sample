import styled from 'styled-components';

export const StyledFlex = styled.div`
  padding-top: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledContainer = styled.div`
  width: calc(100% - 46px);
  margin-right: 5px;
`;
export const StyledTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledFlex2 = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSuccess = styled.div`
  display: flex;
  margin-left: 16px;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.palette.success.main};
`;

export const StyledPercentage = styled.span`
  margin-left: 1px;
  margin-top: 3px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.success.main};
`;

export const StyledSecondary = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
