import React from 'react';
import { Button, Progress } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import {
  StyledEmptyListContainer,
  StyledEmptyListContainerFlex,
} from './index.styled';

const ListEmptyResult = ({
  loader,
  placeholder,
  loading,
  title,
  actionTitle,
  content,
  onClick,
}) => {
  if (loading || loader) {
    return (
      <React.Fragment>
        {placeholder ? (
          placeholder
        ) : (
          <StyledEmptyListContainerFlex>
            <Progress percent={30} />
            <span>Loading...</span>
          </StyledEmptyListContainerFlex>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <StyledEmptyListContainer>
        {title ? <h4>{title}</h4> : null}
        <p>{content}</p>

        {actionTitle ? (
          <Button
            type='primary'
            style={{ marginTop: 30, minWidth: 150 }}
            onClick={onClick}
          >
            {actionTitle}
          </Button>
        ) : null}
      </StyledEmptyListContainer>
    );
  }
};

export default ListEmptyResult;

ListEmptyResult.defaultProps = {
  title: <IntlMessages id='common.noRecordFound' />,
  description: '',
};

ListEmptyResult.propTypes = {
  loader: PropTypes.bool,
  placeholder: PropTypes.element,
  loading: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  actionTitle: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
};
