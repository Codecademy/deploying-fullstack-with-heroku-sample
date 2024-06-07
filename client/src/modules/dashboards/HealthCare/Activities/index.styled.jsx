import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledActivityFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled(Typography.Text)`
  margin-top: 2px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledImgWrapper = styled.div`
  margin-right: 16px;
  min-width: 60px;
  width: 60px;
  height: 60px;
  & img {
    width: '100%';
  }
`;
