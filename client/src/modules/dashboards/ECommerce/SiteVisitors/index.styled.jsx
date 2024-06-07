import { List } from 'antd';
import styled from 'styled-components';
import AppCard from '@crema/components/AppCard';

export const StyledSiteVisitorCell = styled(List.Item)`
  display: flex;
  align-items: center;
  padding: 8px 20px !important;
  border-bottom: 0 none !important;

  & h6 {
    flex: 1;
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 0;
  }
`;

export const StyledSiteVisitorCard = styled(AppCard)`
  overflow: hidden;

  & .ant-card-body {
    padding-bottom: 0;

    & .ant-row > .ant-col {
      margin-bottom: 16px;
    }
  }
`;

export const StyledCountriesThumb = styled.span`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }

  & img {
    height: 30px;
    width: 30px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    background-color: white;
  }
`;

export const StyledVisitorsCount = styled.span`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 15px;
  color: #fff;
  padding: 4px 12px;
`;

export const StyledMapView = styled.div`
  position: relative;
  height: 100%;
  max-height: 250px;
  overflow: hidden;

  & .rsm-svg {
    height: 100%;
    width: 100%;
  }
`;

export const StyledSiteVisitorTitle = styled.h3`
  color: ${({ theme }) => theme.palette.text.secondary};
  padding-left: 20px;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 20px;
  }
`;
