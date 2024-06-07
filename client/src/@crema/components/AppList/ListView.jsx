/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import PropTypes from 'prop-types';
import AppAnimateGroup from '../AppAnimateGroup';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';

const getEmptyContainer = (ListEmptyComponent) => {
  if (ListEmptyComponent)
    return React.isValidElement(ListEmptyComponent) ? (
      ListEmptyComponent
    ) : (
      <ListEmptyComponent />
    );
  return null;
};

const getFooterContainer = (ListFooterComponent) => {
  if (ListFooterComponent)
    return React.isValidElement(ListFooterComponent) ? (
      ListFooterComponent
    ) : (
      <ListFooterComponent />
    );
  return null;
};
const ListView = ({
  renderItem,
  onEndReached,
  data,
  animation,
  delay = 0,
  duration = 200,
  containerStyle,
  border,
  ListFooterComponent,
  ListEmptyComponent,
  ...rest
}) => {
  const { theme } = useThemeContext();
  const borderStyle = {
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    overflow: 'hidden',
  };

  if (!onEndReached) {
    onEndReached = () => {};
  }

  let style = containerStyle;
  if (border) {
    style = { ...style, ...borderStyle };
  }
  useBottomScrollListener(onEndReached, 200);
  return (
    <AppAnimateGroup
      style={{ ...style }}
      {...rest}
      enter={{ delay, duration, animation }}
    >
      {data.length > 0
        ? data.map((item, index) => {
            return (
              <div key={'listItem-' + item.id + '-' + index}>
                {renderItem(item, index)}
              </div>
            );
          })
        : getEmptyContainer(ListEmptyComponent)}
      {getFooterContainer(ListFooterComponent)}
    </AppAnimateGroup>
  );
};

export default ListView;

ListView.propTypes = {
  border: PropTypes.bool,
  renderItem: PropTypes.func,
  delay: PropTypes.number,
  duration: PropTypes.number,
  animation: PropTypes.string,
  containerStyle: PropTypes.object,
  ListEmptyComponent: PropTypes.node,
  ListFooterComponent: PropTypes.node,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
};
ListView.defaultProps = {
  border: false,
  delay: 0,
  duration: 200,
  animation: 'transition.slideUpIn',
  data: [],
  onEndReached: () => {},
};
