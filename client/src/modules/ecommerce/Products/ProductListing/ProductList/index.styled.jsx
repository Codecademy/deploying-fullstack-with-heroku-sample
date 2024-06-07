import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledProductListCard = styled(AppCard)`
  cursor: pointer;
  margin: 8px;

  & .ant-card-body {
    padding: 20px;
  }
`;

export const StyledProductListCardContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const StyledProductListSlider = styled.div`
  margin-bottom: 12px;
  max-width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-right: 16px;
    margin-bottom: 0;
    width: 8rem;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 16px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 10rem;
  }

  & .slick-dots {
    bottom: -15px;
  }
`;

export const StyledProductListSliderThumb = styled.div`
  margin-bottom: 8px;
  text-align: center;

  & img {
    max-width: 100%;
    display: inline-block;
  }
`;
export const StyledProductListSliderContent = styled.div`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(100% - 8rem);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: calc(100% - 10rem);
  }
`;

export const StyledProductListSliderContentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 0;
  }
`;

export const StyledProductListFavorCheck = styled.span`
  margin-left: auto;
  display: block;
  text-align: right;
  cursor: pointer;
  font-size: 20px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
    text-align: left;
  }
`;

export const StyledProductListContentPara = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 20px;
`;

export const StyledProductListPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.font.size.sm};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export const StyledProductListPriceItem = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.font.size.sm};

  &:not(:first-child) {
    margin-left: 8px;
    padding-left: 8px;
    border-left: 1px solid ${({ theme }) => theme.palette.dividerColor};

    [dir='rtl'] & {
      border-left: 0 none;
      border-right: 1px solid ${({ theme }) => theme.palette.dividerColor};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-left: 16px;
      padding-left: 16px;
    }
  }

  &:first-child {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.green {
    margin-bottom: 4px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.green[6]};
    border-left-color: ${({ theme }) => theme.palette.green[6]};

    [dir='rtl'] & {
      border-right-color: ${({ theme }) => theme.palette.green[6]};
    }
  }
`;

export const StyledProductListPriceItemText = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.gray[600]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledProductListPriceItemValue = styled.span`
  margin-left: 8px;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;
export const StyledProductListPriceItemValueCut = styled.span`
  text-decoration: line-through;
`;

export const StyledProductListAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -8px;
  margin-right: -8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 16px;
    margin-left: -12px;
    margin-right: -12px;
  }
`;

export const StyledProductListActionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 12px;
    padding-right: 12px;
  }

  &.add-to-com {
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      display: flex;
    }
  }

  & > span {
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  & .ant-checkbox {
    top: 0;
  }

  & .ant-rate {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;
