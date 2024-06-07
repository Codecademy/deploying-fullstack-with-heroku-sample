import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledTextNoSpace = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledText = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledTitle = styled(Typography.Title)`
  font-weight: ${({ theme }) => theme.font.weight.regular} !important;
  font-size: ${({ theme }) => theme.font.size.base} !important;
  color: ${({ theme }) => theme.palette.text.secondary} !important;
  margin-top: 2px;
  margin-bottom: 3px !important;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledDesc = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 5px;
`;

export const StyledCardWrapper = styled.div`
  padding-bottom: 4px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.dividerColor};
`;

export const StyledCardDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: -10px;
`;

export const StyledCardDetailContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 6px;
`;
export const StyledDetailItemContainer = styled.div`
  padding: 0 10px 10px;
`;
