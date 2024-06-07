import { List } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledMyClassItem = styled(List.Item)`
  padding: 4px 20px !important;
  display: flex;
  align-items: center;
  border-bottom: 0 none !important;
`;

export const StyledMyClassThumb = styled.div`
  width: 50px;
  height: 50px;
  background-color: #470137;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.sizes.borderRadius.base};
  padding: 6px;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledMyClassContent = styled.div`
  flex: 1;

  & h3 {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 0;
  }
`;

export const StyledMyClassContentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMyClassPercent = styled.span`
  margin-left: auto;
  color: ${({ theme }) => rgba(theme.palette.primary.main, 0.5)};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledMyClassProgressView = styled.div`
  margin-top: 4px;
`;
