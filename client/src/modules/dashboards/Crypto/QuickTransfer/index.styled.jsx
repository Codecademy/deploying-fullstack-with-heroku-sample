import { Avatar, Input, Select } from "antd";
import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.span`
  margin-left: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledCoinWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const StyledCoinInput = styled(Input)`
  padding-left: 40px;
  text-align: right;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledAmountTag = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 52px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const StyledAmountWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const StyledSecondaryText = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 16px;
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -16px;
  margin-right: -16px;
`;

export const StyledRecentContact = styled.div`
  padding: 0 16px 10px;
`;

export const StyledAvatarWrapper = styled.div`
  margin-bottom: 10px;
`;

export const StyledAvatar = styled(Avatar)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 70px;
    height: 70px;
  }
`;

export const StyledSelect = styled(Select)`
  padding-left: 8px;

  .ant-select-selector {
    background: ${({ theme }) => theme.palette.background.default} !important;
  }
`;
