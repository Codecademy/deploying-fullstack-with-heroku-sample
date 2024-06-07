import { Divider } from 'antd';
import styled from 'styled-components';

export const StyledOrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};

  & p {
    margin-bottom: 0;
  }

  & span {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const StyledSummaryOrderDivider = styled(Divider)`
  margin-top: 16px;
  margin-bottom: 16px;
`;
