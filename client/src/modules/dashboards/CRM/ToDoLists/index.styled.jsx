import { Typography } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledText = styled(Typography.Text)`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledTodoCellWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;

  h4,
  h5,
  p {
    margin-bottom: 0 !important;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: ${({ theme }) => theme.font.size.base}!important;
  }
  & .date-view {
    margin-right: 20px;
    max-width: 30px;
  }
  & .contentArea {
    font-size: 14px;
    flex: 1;
    padding: 12px 20px;
    background-color: ${({ theme }) => theme.palette.background.default};
    border: solid 1px transparent;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  & .icon-btn {
    height: 24px;
    max-width: 24px;
    min-width: 24px;
    border: 1px solid ${({ theme }) => rgba(theme.palette.success.main, 0.5)} !important;
    color: ${({ theme }) => rgba(theme.palette.success.main, 0.5)} !important;
    padding: 3px;
    font-size: 16px;
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
  & .icon-btn-pencil {
    border: 1px solid ${({ theme }) => rgba(theme.palette.primary.main, 0.5)} !important;
    color: ${({ theme }) => rgba(theme.palette.primary.main, 0.5)} !important;
  }
  &:hover {
    & .date-view {
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }
    & .contentArea {
      background-color: transparent;
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
    & .icon-btn {
      border: 1px solid ${({ theme }) => theme.palette.success.main};
      color: ${({ theme }) => theme.palette.success.main};
    }
    & .icon-btn-pencil {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.success.main};
    }
  }
`;
