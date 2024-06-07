import styled from 'styled-components';

export const StyledChartViewWrapper = styled.div`
  margin-bottom: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: 'center';
`;

export const StyledCategoryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

export const StyledCategoryItemIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: '50%';
  margin-right: 8px;
  display: block;
  margin-top: 2px;
`;

export const StyledCategoryText = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-left: 18px;
  font-size: ${({ theme }) => theme.font.size.base};
  white-space: nowrap;
`;
