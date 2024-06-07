import styled from 'styled-components';

export const StyledEarningDot = styled.span`
  height: 12px;
  width: 12px;
  margin-right: 16px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledEarningText = styled.p`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledEarningAction = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledEarningGraph = styled.div`
  & text {
    fill: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const StyledEarningListView = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding-top: 12px;
  margin-top: 12px;

  & li.ant-list-item {
    padding-bottom: 8px;
    padding-top: 0;
    border-bottom: 0 none;
    justify-content: flex-start;
  }
`;
