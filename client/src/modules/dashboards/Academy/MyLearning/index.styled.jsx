import { List } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledLearningItems = styled(List.Item)`
  padding: 8px 20px !important;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-bottom: 0 none !important;
`;

export const StyledLearningItemsInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledLearningThumb = styled.div`
  background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.12)};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  padding: 6px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledLearningContent = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.palette.text.secondary};

  & h3 {
    margin-bottom: 2px;
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    margin-bottom: 4px;
  }
`;

export const StyledLearningAction = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;
