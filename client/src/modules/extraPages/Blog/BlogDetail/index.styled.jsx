import { Col } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledCol1 = styled(Col)`
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    order: 2;
    position: sticky;
    top: 70px;
    bottom: 0;
    align-self: flex-start;
  }
`;

export const StyledCol2 = styled(Col)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    order: 1;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFlex1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 650px;
`;

export const StyledTitle2 = styled.h2`
  color: ${({ theme }) => theme.palette.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 26px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 30px;
  }
`;

export const StyledIconWrapper = styled.div`
  font-size: 16px;
  margin-top: 4px;
  margin-right: 8px;
`;

export const StyledFlex2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-left: -8px;
    margin-right: -8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-left: -16px;
    margin-right: -16px;
  }
`;

export const StyledFlex3 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const StyledBlogDetailHeaderWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  min-height: 340px;
  color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.cardRadius} / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => rgba(theme.palette.black, 0.3)};
    border-radius: inherit;
  }
  & > * {
    position: relative;
    z-index: 3;
  }
`;
