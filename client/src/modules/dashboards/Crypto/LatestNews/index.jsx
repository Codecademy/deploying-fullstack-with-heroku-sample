import React from 'react';
import NewsList from './NewsList';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledLatestNewsCard } from './NewsList.styled';

const LatestNews = (props) => {
  const { newsData } = props;

  const { messages } = useIntl();

  return (
    <StyledLatestNewsCard
      className='no-card-space-ltr-rtl'
      heightFull
      title={messages['dashboard.latestNews']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <NewsList newsData={newsData} />
    </StyledLatestNewsCard>
  );
};

export default LatestNews;

LatestNews.defaultProps = {
  newsData: [],
};

LatestNews.propTypes = {
  newsData: PropTypes.array,
};
