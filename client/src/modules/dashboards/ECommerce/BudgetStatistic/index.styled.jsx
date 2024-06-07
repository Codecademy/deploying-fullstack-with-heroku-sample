import AppCircularProgress from '@crema/components/AppCircularProgress';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledSecondaryText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
export const StyledAppCircularProgress = styled(AppCircularProgress)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledSecondary = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledFooterWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledFooterAction = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-bottom: 2px;
  &:not(:first-of-type) {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid
      ${({ theme }) => rgba(theme.palette.text.secondary, 0.2)};
  }
  & .footer-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
  }
  & .footer-dot {
    height: 10px;
    width: 10px;
    min-width: 10px;
    margin-right: 4px;
    border-radius: 50%;
  }
`;

export const StyledSuccess = styled.div`
  background-color: ${({ theme }) => theme.palette.success.main};
`;
