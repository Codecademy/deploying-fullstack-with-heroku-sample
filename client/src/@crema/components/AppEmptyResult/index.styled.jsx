import styled from 'styled-components';
import { Button, Typography } from 'antd';

const { Title } = Typography;

export const StyledEmptyResult = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledParaText = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledEmptyResultBtn = styled(Button)`
  margin-bottom: 8px;
`;
