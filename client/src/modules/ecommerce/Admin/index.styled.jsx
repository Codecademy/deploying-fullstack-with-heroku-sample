import styled from 'styled-components';
import { Form } from 'antd';

export const StyledFormWrapper = styled(Form)`
  .ant-select,
  .ant-input-number {
    width: 100%;
  }

  .notification {
    margin-left: 10px;
  }
`;

export const StyledListingStatus = styled.div`
  padding: 3px 5px;
  border-radius: 4px;
  text-align: center;
`;

export const StyledTitle5 = styled.h5`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 16px;
  }
`;
