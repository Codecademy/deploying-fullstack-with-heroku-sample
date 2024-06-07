/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import PropTypes from 'prop-types';
import { Grid } from 'antd';
import AppAnimateGroup from '../AppAnimateGroup';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import { StyledGridColumnCount, StyledGridContainer } from './index.styled';

const { useBreakpoint } = Grid;

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

const GridView = ({
  column,
  responsive,
  itemPadding,
  animation,
  renderItem,
  onEndReached,
  data,
  containerStyle,
  border,
  ListFooterComponent,
  ListEmptyComponent,
}) => {
  const { theme } = useThemeContext();

  const [displayColumn, setColumn] = useState(column);

  const width = useBreakpoint();
  if (!onEndReached) {
    onEndReached = () => {};
  }

  useEffect(() => {
    setColumn(column);
  }, [column]);

  useEffect(() => {
    const getColumnCount = () => {
      if (responsive) {
        if (width.xxl) {
          return (
            responsive.xxl ||
            responsive.xl ||
            responsive.lg ||
            responsive.md ||
            responsive.sm ||
            responsive.xs ||
            column
          );
        } else if (width.xl) {
          return (
            responsive.xl ||
            responsive.lg ||
            responsive.md ||
            responsive.sm ||
            responsive.xs ||
            column
          );
        } else if (width.lg) {
          return (
            responsive.lg ||
            responsive.md ||
            responsive.sm ||
            responsive.xs ||
            column
          );
        } else if (width.md) {
          return responsive.md || responsive.sm || responsive.xs || column;
        } else if (width.sm) {
          return responsive.sm || responsive.xs || column;
        } else if (width.xs) {
          return responsive.xs || column;
        }
      } else {
        return column;
      }
    };
    setColumn(getColumnCount());
  }, [width, column, responsive]);

  const borderStyle = {
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    overflow: 'hidden',
  };

  let style = containerStyle;
  if (border) {
    style = { ...style, ...borderStyle };
  }
  useBottomScrollListener(onEndReached, 200);
  return (
    <StyledGridContainer>
      <AppAnimateGroup
        enter={{
          animation,
        }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: -itemPadding,
          ...style,
        }}
      >
        {data.length > 0
          ? data.map((item, index) => (
              <StyledGridColumnCount
                key={'grid-' + index}
                style={{
                  flexGrow: 0,
                  maxWidth: `${100 / displayColumn}%`,
                  flexBasis: `${100 / displayColumn}%`,
                  padding: itemPadding,
                  boxSizing: 'border-box',
                }}
              >
                {renderItem(item, index)}
              </StyledGridColumnCount>
            ))
          : null}
      </AppAnimateGroup>
      {data.length === 0 ? getEmptyContainer(ListEmptyComponent) : null}
      {getFooterContainer(ListFooterComponent)}
    </StyledGridContainer>
  );
};

export default GridView;
GridView.propTypes = {
  responsive: PropTypes.object,
  itemPadding: PropTypes.number,
  renderItem: PropTypes.func,
  border: PropTypes.bool,
  column: PropTypes.number,
  animation: PropTypes.string,
  containerStyle: PropTypes.object,
  ListEmptyComponent: PropTypes.node,
  ListFooterComponent: PropTypes.node,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
};
GridView.defaultProps = {
  border: false,
  data: [],
  column: 3,
  animation: 'transition.expandIn',
  itemPadding: 12,
  // responsive: {
  //   xs: 1,
  //   sm: 2,
  //   md: 2,
  //   lg: 4,
  //   xl: 4,
  // },
};
