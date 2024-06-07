import styled from 'styled-components';

export const StyledUserFlatListItem = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
  }
`;
export const StyledUserFlatListItemContent = styled.div`
  padding-bottom: 20px;
  flex: 1;
  position: relative;
  border-bottom: solid 2px ${({ theme }) => theme.palette.gray[400]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-bottom: 32px;
  }

  &:before {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      z-index: 1;
      height: 2px;
      width: 162px;
      background-color: ${({ theme }) => theme.palette.gray[400]};
      transition: all 0.5s ease;

      [dir='rtl'] & {
        left: auto;
        right: 0;
      }
    }
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 12px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    & > span {
      margin-right: 4px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 4px;
      }
    }

    & .user-des {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const StyledUserFlatListItemInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }

  &:hover {
    & .user-flat-list-item-content:before {
      left: -150px;

      [dir='rtl'] & {
        left: auto;
        right: -150px;
      }
    }
  }
`;

export const StyledUserFlatListItemThumb = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 20px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }

  & img {
    width: 100%;
    height: 180px;
    object-fit: cover;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 130px;
      height: 130px;
    }
  }
`;
export const StyledUserFlatListItemPara = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-right: 24px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 24px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-right: 64px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 64px;
    }
  }
`;

export const StyledUserFlatSocialInfo = styled.div`
  color: ${({ theme }) => theme.palette.gray[600]};
  margin-left: -12px;
  margin-right: -12px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.base};
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: -20px;
    margin-right: -20px;
  }
`;

export const StyledUserFlatSocialInfoItem = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  & span {
    margin-right: 4px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 4px;
    }
  }

  & .anticon {
    font-size: 20px;
  }
`;
export const StyledUserFlatSocialInfoItemText = styled(
  StyledUserFlatSocialInfoItem,
)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    display: none;
  }
`;

export const StyledUserFlat = styled.div`
  flex: 1;
`;
