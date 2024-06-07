import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MarkerClustererExample = () => {
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
      // marker
      const { Marker } = await loader.importLibrary("marker");
      let position;
      // markers.map((marker) => {
      position = {
        lat: -34.397,
        lng: 150.644,
      };
      const mapOptions = (google.maps.MapOptions = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapId: "YOUR_MAP_ID",
      });
      const map = new Map(mapRef.current, mapOptions);

      const marker = new Marker({
        position: position,
        map: map,
      });
    };
    initMap();
  }, []);

  /*      'https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json',

        center: { lat: 37.775, lng: -22.434 },
    */

  return (
    <div
      ref={mapRef}
      style={{ height: "500px", width: "100%", overflow: "hidden" }}
    />
  );
};
export default MarkerClustererExample;
