import { Button } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledDuration = styled.span`
  margin-bottom: 10px;
  display: block;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledTitle3 = styled.h3`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 16px;
`;

export const StyledSecondary = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 16px;
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const StyledFlexIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.red[6]};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  & svg {
    margin-top: 4px;
    margin-right: 4px;
    display: block;
  }
`;

export const StyledButton = styled(Button)`
  background-color: transparent !important;
  border: none;
`;

export const StyledTag = styled.span`
  background-color: ${({ theme }) => rgba(theme.palette.text.primary, 0.7)};
  color: ${({ theme }) => theme.palette.white};
  padding: 8px 16px;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
