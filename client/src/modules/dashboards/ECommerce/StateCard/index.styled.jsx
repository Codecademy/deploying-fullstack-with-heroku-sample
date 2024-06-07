import AppCard from '@crema/components/AppCard';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledAppCard = styled(AppCard)`
  .ant-card-body {
    padding: 0;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledFlexWrapper = styled.div`
  flex-direction: column;
  display: inline-flex;
  align-items: flex-end;
  align-self: flex-end;
  margin-left: 4px;

  @media only screen and (min-width: 1200px) and (max-width: 1579px) {
    display: 'none';
  }
`;

export const StyledArrowWrapper = styled.span`
  padding-top: 4px;
  padding-left: 4px;
  line-height: 1;
`;

export const StyledSecondaryText = styled.div`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledStateWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 74px;
  padding-left: 80px;

  & .state-icon {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 84px;
    height: 100%;
    transition: all 0.3s linear;
    & .hsIcon {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 46px;
      width: 46px;
      border-radius: 50%;
      transition: all 0.3s linear;
      color: ${(props) => props.color};
      background-color: ${(props) => rgba(props.color, 0.2)};
    }
  }
  & .hsIcon {
    & .icons {
      transition: all 0.3s linear;
      font-size: 24;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }
  }
  & .state-content {
    padding: 20px;
    padding-left: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s linear;
  }
  & .state-growth {
    margin-bottom: 4px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: ${(props) => props.color + '44'};
    color: ${(props) => props.color};
    border-radius: 30px;
  }
  &:hover {
    & .hsIcon {
      width: 100%;
      height: 100%;
      border-radius: 0;
      color: white;
      background-color: ${(props) => props.color};
      & .icons {
        font-size: 32px;
      }
    }
    & .state-content {
      padding-left: 16px;
    }
  }
`;
