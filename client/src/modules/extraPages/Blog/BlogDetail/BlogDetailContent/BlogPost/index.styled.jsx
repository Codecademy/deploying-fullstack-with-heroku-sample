import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledBlogPostWrapper = styled.div`
  display: flex;
  border: solid 1px ${({ theme }) => theme.palette.dividerColor};
  border-radius: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding-left: 60px;
  }

  .fs-12 {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
  .text-secondary {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .text {
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.font.size.base};
    line-height: 1.5;
  }
`;

export const StyledFlexWrapper = styled.div`
  min-width: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-right: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-right: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    margin-right: 15px;
  }
`;

export const StyledBox = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-right: 16px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledTitle6 = styled.h6`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 4px;
`;

export const StyledButton = styled.a`
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: underline;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.base};

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
