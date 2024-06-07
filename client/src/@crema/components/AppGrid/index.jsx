import React from 'react';
import GridView from './GridView';
import PropTypes from 'prop-types';
import GridFooter from './GridFooter';

const AppGrid = ({ footerProps, ...rest }) => {
  return (
    <GridView
      {...rest}
      ListFooterComponent={
        footerProps ? (
          <GridFooter
            loading={footerProps.loading}
            footerText={footerProps.footerText}
          />
        ) : null
      }
    />
  );
};

export default AppGrid;
AppGrid.propTypes = {
  border: PropTypes.bool,
  containerStyle: PropTypes.object,
  footerProps: PropTypes.object,
  ListEmptyComponent: PropTypes.node,
  ListFooterComponent: PropTypes.node,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
};
AppGrid.defaultProps = {
  border: false,
  data: [],
};
