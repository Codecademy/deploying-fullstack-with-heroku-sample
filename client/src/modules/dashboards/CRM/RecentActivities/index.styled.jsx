import styled from 'styled-components';

export const StyledRecentActivityWrapper = styled.div`
  display: flex;
  padding: 3px 20px;
`;

export const StyledFlexRecentActivity = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRecentActivityTitle = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-left: auto;
`;

export const StyledRecentActivityName = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledRecentActivityMsg = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 13;
  margin-bottom: 4px;
`;
