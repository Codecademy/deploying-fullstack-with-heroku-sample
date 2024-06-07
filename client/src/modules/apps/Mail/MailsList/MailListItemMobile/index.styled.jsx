import { Avatar } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledMailListItemMobile = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding: 8px 24px;
  cursor: pointer;
  justify-content: flex-start;

  &.mailRead {
    background-color: ${({ theme }) => rgba(theme.palette.black, 0.03)};
  }
`;

export const StyledMailListAvatarMobileView = styled.div`
  margin-right: 14px;
  margin-top: 3px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }

  &.checked {
    width: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledMailListAvatarMobile = styled(Avatar)`
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  display: block;
`;

export const StyledMailListContentMobile = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 50px);

  & .mail-list-time {
    font-size: ${({ theme }) => theme.font.size.sm};
    width: auto;
  }
`;
export const StyledMailListMainContent = styled.div`
  position: relative;
  width: calc(100% - 60px);
  padding-right: 10px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 10px;
  }
`;

export const StyleMailListTitleMobile = styled.p`
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 120px;
  }
`;

export const StyledMailListSubTitleMobile = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 0;
  white-space: nowrap;
`;
export const StyledMailListDescMobile = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 0;
`;

export const StyledMailListActionMobile = styled.div`
  min-width: 60px;
  padding-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: all 0.4s ease 0s;
`;

export const StyledMailListTimeMobile = styled.span`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.secondary};
`;
export const StyledMailListStarredMobile = styled.span`
  margin-top: 3px;
  position: relative;
`;
