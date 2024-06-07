import React from 'react';
import WebTrafficGraph from './WebTrafficGraph';
import PropTypes from 'prop-types';
import { blue, grey, red } from '@ant-design/colors';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledWebTrafficCard,
  StyledWebTrafficContent,
  StyledWebTrafficItem,
} from './index.styled';

const WebTraffic = ({ websiteTrafficData }) => {
  const { messages } = useIntl();
  return (
    <StyledWebTrafficCard title={messages['dashboard.websiteTraffic']}>
      <WebTrafficGraph websiteTrafficData={websiteTrafficData} />
      <StyledWebTrafficContent>
        <StyledWebTrafficItem>
          <h4 style={{ color: red[5] }}>1,265</h4>
          <p className='mb-0'>
            <IntlMessages id='common.subscribers' />
          </p>
        </StyledWebTrafficItem>
        <StyledWebTrafficItem>
          <h4 style={{ color: grey[4] }}>2021</h4>
        </StyledWebTrafficItem>
        <StyledWebTrafficItem>
          <h4 style={{ color: blue[4] }}>12,432</h4>
          <p className='mb-0'>
            <IntlMessages id='common.newUsers' />
          </p>
        </StyledWebTrafficItem>
      </StyledWebTrafficContent>
    </StyledWebTrafficCard>
  );
};

export default WebTraffic;

WebTraffic.defaultProps = {
  websiteTrafficData: [],
};

WebTraffic.propTypes = {
  websiteTrafficData: PropTypes.array,
};
