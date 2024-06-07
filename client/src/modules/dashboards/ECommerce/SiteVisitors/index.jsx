import React from 'react';
import MapView from './MapView';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col, List } from 'antd';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import {
  StyledCountriesThumb,
  StyledSiteVisitorCard,
  StyledSiteVisitorCell,
  StyledSiteVisitorTitle,
  StyledVisitorsCount,
} from './index.styled';

const CountryCell = ({ data }) => (
  <StyledSiteVisitorCell className='item-hover'>
    <StyledCountriesThumb>
      <img src={data.icon} alt='icon' />
    </StyledCountriesThumb>
    <h6 className='text-truncate'>{data.country}</h6>
    <StyledVisitorsCount>{data.value}</StyledVisitorsCount>
  </StyledSiteVisitorCell>
);

CountryCell.propTypes = {
  data: PropTypes.object,
};

const SiteVisitors = ({ siteVisitorsData }) => {
  const { messages } = useIntl();
  return (
    <StyledSiteVisitorCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.siteVisitorsStatistics']}
    >
      <AppRowContainer>
        <Col xs={24} md={7} xl={7} xxl={6}>
          <StyledSiteVisitorTitle>
            {messages['eCommerce.countries']}
          </StyledSiteVisitorTitle>
          <List
            dataSource={siteVisitorsData}
            renderItem={(data) => <CountryCell key={data.id} data={data} />}
          />
        </Col>
        <Col xs={24} md={10} xl={10} xxl={12}>
          <MapView />
        </Col>
        <Col xs={24} md={7} xl={7} xxl={6}>
          <StyledSiteVisitorTitle>
            {messages['eCommerce.countries']}
          </StyledSiteVisitorTitle>
          <List
            dataSource={siteVisitorsData}
            renderItem={(data) => (
              <CountryCell key={'sec-c-' + data.id} data={data} />
            )}
          />
        </Col>
      </AppRowContainer>
    </StyledSiteVisitorCard>
  );
};

export default SiteVisitors;

SiteVisitors.propTypes = {
  siteVisitorsData: PropTypes.array,
};
