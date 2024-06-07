import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledSocialVisitorCard = styled(AppCard)`
  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSocialVisitorCategories = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledSocialVisitorCategoryTitle = styled.div`
  display: flex;
  align-items: center;

  & .categories-title {
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 4px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledSocialVisitorCategoryItem = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 8px;

  & .dot {
    padding: 4px;
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      height: 16px;
      width: 16px;
    }
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: ${({ theme }) => theme.font.size.base};
    text-transform: capitalize;
    margin-bottom: 0;
  }
`;

export const StyledGraphWrapper = styled.div`
  & .social-graph-text {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.lg};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 18px;
    }
  }
`;
