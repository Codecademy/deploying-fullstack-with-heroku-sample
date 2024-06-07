import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledNewsImg,
  StyledNewsList,
  StyledNewsListContent,
} from './NewsList.styled';

const NewsList = (props) => {
  const { newsData } = props;

  return (
    <List
      dataSource={newsData}
      renderItem={(news) => {
        return (
          <StyledNewsList
            key={news.id}
            className='item-hover'
            extra={<StyledNewsImg src={news.image} alt='bitcoin' />}
          >
            <StyledNewsListContent>
              <h5>
                <span>{news.created}</span>
                <span className='text-primary'>{news.by}</span>
              </h5>
              <p>{news.news}</p>
            </StyledNewsListContent>
          </StyledNewsList>
        );
      }}
    />
  );
};

export default NewsList;

NewsList.defaultProps = {
  newsData: [],
};

NewsList.propTypes = {
  newsData: PropTypes.array,
};
