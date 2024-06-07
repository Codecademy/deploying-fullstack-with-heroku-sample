import React from 'react';
import MarketGraph from './MarketGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { geekblue, green, red } from '@ant-design/colors';
import {
  StyledCryptoMarketActivityCard,
  StyledMarketFooter,
  StyledMarketFooterAction,
  StyledMarketFooterActionItem,
  StyledMarketFooterContent,
  StyledMarketFooterContentItem,
  StyledMarketFooterContentItemTitle,
} from './index.styled';

const CryptoMarketActivity = (props) => {
  const { marketGraphData } = props;

  const { messages } = useIntl();
  return (
    <StyledCryptoMarketActivityCard
      heightFull
      title={messages['dashboard.cryptoMarketActivity']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}
    >
      <MarketGraph marketGraphData={marketGraphData} />
      <StyledMarketFooter>
        <StyledMarketFooterAction>
          <StyledMarketFooterActionItem>
            <span className='dot' style={{ backgroundColor: green[6] }} />
            <span>
              <IntlMessages id='common.low' />
            </span>
          </StyledMarketFooterActionItem>
          <StyledMarketFooterActionItem>
            <span className='dot' style={{ backgroundColor: geekblue[5] }} />
            <span>
              <IntlMessages id='common.medium' />
            </span>
          </StyledMarketFooterActionItem>
          <StyledMarketFooterActionItem>
            <span className='dot' style={{ backgroundColor: red[5] }} />
            <span>
              <IntlMessages id='common.high' />
            </span>
          </StyledMarketFooterActionItem>
        </StyledMarketFooterAction>
        <StyledMarketFooterContent>
          <StyledMarketFooterContentItem>
            <StyledMarketFooterContentItemTitle>
              1356
            </StyledMarketFooterContentItemTitle>
            <span>
              <IntlMessages id='dashboard.openDeals' />
            </span>
          </StyledMarketFooterContentItem>

          <StyledMarketFooterContentItem>
            <StyledMarketFooterContentItemTitle>
              $5.9B
            </StyledMarketFooterContentItemTitle>
            <span>
              <IntlMessages id='dashboard.dealsVolume' />
            </span>
          </StyledMarketFooterContentItem>
        </StyledMarketFooterContent>
      </StyledMarketFooter>
    </StyledCryptoMarketActivityCard>
  );
};

export default CryptoMarketActivity;

CryptoMarketActivity.defaultProps = {
  marketGraphData: [],
};

CryptoMarketActivity.propTypes = {
  marketGraphData: PropTypes.array,
};
