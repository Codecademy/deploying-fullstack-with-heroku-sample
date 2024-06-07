import { Avatar } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledTodoListMobileItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.gray[600]};
  padding: 8px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  &.checked {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
    font-weight: ${({ theme }) => theme.font.weight.light};
  }
`;

export const StyledTodoListMobileMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 70px);
  overflow: hidden;

  & .ant-tag {
    border-radius: ${({ theme }) => theme.cardRadius30};
  }
`;

export const StyledTodoListMobileView = styled.div`
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
    color: ${({ theme }) => theme.palette.primary.contrastText};
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTodoListMobileAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
  line-height: 36px;
`;

export const StyledTodoListMobileContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px);

  & p {
    margin-bottom: 0;
  }
`;

export const StyledTodoListMobileTitle = styled.span`
  position: relative;
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;

  & span {
    margin-bottom: 2px;
  }
`;

export const StyledTodoListMobilePriority = styled.span`
  margin-left: 6px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 6px;
  }
`;

export const StyledTodoListMobileAction = styled.div`
  position: relative;
  min-width: 60px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 10px;
  }
`;

export const StyledTodoListMobileDate = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledTodoListStarMobile = styled.span`
  position: relative;
`;
