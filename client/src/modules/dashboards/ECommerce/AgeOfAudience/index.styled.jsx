import styled from 'styled-components';

export const StyledBox = styled.div`
  padding: 8px 12px;
`;

export const StyledFlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

export const StyledDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 3px;
`;

export const StyledTitle5 = styled.h5`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.base};
`;
export const StyledTitle4 = styled.h5`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 0;
  font-size: 16px;
  margin-left: auto;
`;
