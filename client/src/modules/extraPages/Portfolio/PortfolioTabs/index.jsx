import * as React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import PortfolioCard from './PortfolioCard';
import { useNavigate } from 'react-router-dom';
import AppGrid from '@crema/components/AppGrid';
import { StyledTabs } from '../index.styled';

const PortfolioTabs = ({ portfolio }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const onTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  const onViewPortfolioDetail = (data) => {
    navigate(`/extra-pages/portfolio/${data.id}`);
  };

  const tabs = [
    {
      key: 1,
      label: <IntlMessages id='common.all' />,
      children: (
        <AppGrid
          data={portfolio.all}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderItem={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      ),
    },
    {
      key: 2,
      label: <IntlMessages id='extra.branding' />,
      children: (
        <AppGrid
          data={portfolio.branding}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderItem={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      ),
    },
    {
      key: 3,
      label: <IntlMessages id='extra.graphics' />,
      children: (
        <AppGrid
          data={portfolio.graphics}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderItem={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      ),
    },
    {
      key: 4,
      label: <IntlMessages id='extra.logos' />,
      children: (
        <AppGrid
          data={portfolio.logos}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderItem={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      ),
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <StyledTabs
        defaultActiveKey={value}
        onChange={onTabsChange}
        items={tabs}
      />
    </div>
  );
};

export default PortfolioTabs;

PortfolioTabs.propTypes = {
  portfolio: PropTypes.object,
};
