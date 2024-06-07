import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import PropTypes from 'prop-types';
import data from './features.json';

const MapChart = () => {
  return (
    <>
      <ComposableMap>
        <Geographies geography={data}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);

MapChart.propTypes = {
  setTooltipContent: PropTypes.func,
};
