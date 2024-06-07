import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { List } from 'antd';
import PropTypes from 'prop-types';
import {
  StyledBrowserCell,
  StyledBrowserContent,
  StyledBrowserThumb,
} from './index.styled';

const BrowserCell = ({ item }) => {
  return (
    <StyledBrowserCell className='item-hover'>
      <StyledBrowserThumb>
        <img alt='' src={item.icon} />
      </StyledBrowserThumb>

      <StyledBrowserContent>
        <h3>{item.name}</h3>
        <p>{item.value}</p>
      </StyledBrowserContent>
    </StyledBrowserCell>
  );
};

BrowserCell.propTypes = {
  item: PropTypes.object,
};
const Browser = ({ browserData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.browser']}
    >
      <List
        dataSource={browserData}
        renderItem={(item, index) => <BrowserCell item={item} key={index} />}
      />
    </AppCard>
  );
};

export default Browser;

Browser.propTypes = {
  browserData: PropTypes.array,
};
