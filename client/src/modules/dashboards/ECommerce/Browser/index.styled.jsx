import { List } from 'antd';
import styled from 'styled-components';

export const StyledBrowserCell = styled(List.Item)`
  display: flex;
  align-items: center;
  padding: 8px 20px !important;
  border-bottom: 0 none !important;
`;

export const StyledBrowserThumb = styled.span`
  margin-right: 14px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }
`;

export const StyledBrowserContent = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  & p {
    margin-bottom: 0;
  }
`;
