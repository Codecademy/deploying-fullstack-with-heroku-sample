import { List } from 'antd';
import styled from 'styled-components';

export const StyledLatestResultItem = styled(List.Item)`
  position: relative;
  border-bottom: 0 none !important;
  padding: 6px 20px !important;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledLatestResultsFirstItem = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  & h3 {
    white-space: nowrap;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 0;
  }

  & p {
    white-space: nowrap;
    margin-left: 4px;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 4px;
    }
  }
`;

export const StyledLatestResultSecondItem = styled.div`
  padding-left: 12px;
  width: 40%;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 12px;
  }
`;
