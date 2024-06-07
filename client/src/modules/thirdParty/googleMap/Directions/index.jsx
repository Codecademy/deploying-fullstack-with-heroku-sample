/* eslint-disable no-undef */
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

/*/!*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 *!/*/
const MapDirections = () => {
  const mapRef = useRef(null);
  const google = window.google;

  useEffect(() => {
    const initMap = async () => {
      console.log("initMap");
      const loader = new Loader({
        apiKey:
          "https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json",
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");

      const mapOptions = (google.maps.MapOptions = {
        center: { lat: 41.85073, lng: -87.65141 },
        zoom: 8,
        mapId: "YOUR_MAP_ID",
      });
      const map = new Map(mapRef.current, mapOptions);
    };
    initMap();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "500px", width: "100%", overflow: "hidden" }}
    />
  );
};
export default MapDirections;
