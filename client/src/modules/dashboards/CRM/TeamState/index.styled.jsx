import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledContainerMb = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ant-avatar {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
`;
export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const StyledSecondaryText = styled.div`
  width: calc(100% - 60px);
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledTitleWrapper = styled.span`
  padding: 2px 12px;
  margin-right: 6px;
  border-radius: 30px;

  .title {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export const StyledTitle = styled(Typography.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 18px !important;
  margin-bottom: 0 !important;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const StyledIconBtnRoot = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    padding: 16px;
    width: 26px;
    height: 26px;
  }
`;
