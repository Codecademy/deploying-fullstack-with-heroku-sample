import styled from 'styled-components';

export const StyledFlexSuccessContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.success.main};
  justify-content: flex-end;
`;

export const StyledToggleContainer = styled.div`
  position: relative;
  @media only screen and (min-width: 1200px) and (max-width: 1579px) {
    display: none;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin-bottom: 0 !important;
  }
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledIconWrapper = styled.span`
  margin-right: 12px;
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const StyledDurationWrapper = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};

  span {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: calc(100% - 62px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: calc(100% - 70px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: calc(100% - 76px);
  }
`;

export const StyledTitleWrapper = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
`;

export const StyledTag = styled.span`
  border-radius: 30px;
  padding: 4px 12px;
  font-size: 12;
  display: inline-block;
  min-width: 75px;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media only screen and (max-width: 1580px) and (min-width: 1200px) {
    display: none;
  }
`;
