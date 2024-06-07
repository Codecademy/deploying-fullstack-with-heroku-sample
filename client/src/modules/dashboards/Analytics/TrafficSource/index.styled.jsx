import { Collapse } from 'antd';
import { darken } from 'polished';
import styled from 'styled-components';

const { Panel } = Collapse;

export const StyledTrafficCollapse = styled(Collapse)`
  position: relative;
  background-color: transparent;

  &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 5px 2px;
  }

  &.ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow {
    display: none;
  }

  &.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
    border-top: 1px solid
      ${({ theme }) => darken(0.02, theme.palette.borderColor)};
  }
`;

export const StyledCollapseHeaderPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & .ant-progress {
    line-height: 1;
  }
`;

export const StyledTrafficCollapseHeader = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3 {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & span {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledTrafficCollapsePanel = styled(Panel)`
  position: relative;
  border-bottom: 0 none !important;

  &.ant-collapse-item-active {
    background-color: ${({ theme }) =>
      darken(0.03, theme.palette.background.paper)};
  }

  & .ant-collapse-content > .ant-collapse-content-box {
    padding: 8px;
  }
`;

export const StyledTrafficCollapseContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledTrafficCollapseData = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-right: 8px;
  color: ${({ theme }) => theme.palette.text.primary};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;
