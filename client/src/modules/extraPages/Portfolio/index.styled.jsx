import { Tabs } from 'antd';
import styled from 'styled-components';
import AppCard from '@crema/components/AppCard';
import { rgba } from 'polished';

export const StyledTabs = styled(Tabs)`
  & .ant-tabs-nav {
    background-color: ${({ theme }) => theme.palette.background.paper};
    background-image: linear-gradient(
      ${({ theme }) => rgba(theme.palette.white, 0.05)},
      ${({ theme }) => rgba(theme.palette.white, 0.05)}
    );
    box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.04);
    border-radius: 16px;
    margin-bottom: 28px;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      min-height: 48px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      min-height: 60px;
    }
  }

  & .ant-tabs-tab-btn {
    text-align: center;
    min-width: 40px;
    color: ${({ theme }) => theme.palette.text.secondary} !important;
    text-transform: capitalize;
  }
`;

export const StyledPortfolio = styled.div`
  width: 100%;
`;

export const StyledAppCard = styled(AppCard)`
  position: relative;
  cursor: pointer;

  & .ant-card-body {
    padding: 0;
  }
`;

export const StyledPortfolioHeader = styled.div`
  max-width: 672px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 24px;

  & h2 {
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 16px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 20px;
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 12px;
    font-size: 14px;
  }
`;

export const StyledPortfolioTabs = styled(Tabs)`
  & .ant-tabs-nav {
    margin-bottom: 20px;
  }

  & .ant-tabs-nav-wrap .ant-tabs-nav-list,
  & .ant-tabs-nav-wrap {
    justify-content: center;
  }

  & .ant-tabs-tab {
    font-size: ${({ theme }) => theme.font.size.lg};
    min-width: 10px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 6px 12px;
    margin: 0;
    min-height: 48px;
  }

  & .ant-tabs-content-holder {
    margin-bottom: 30px;
  }

  & .react-photo-gallery--gallery img {
    border-radius: ${({ theme }) => theme.cardRadius};
  }
`;
