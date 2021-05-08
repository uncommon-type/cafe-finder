import React, { useEffect, useState } from "react";

import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import PinIcon from "./PinIcon";
import Dialog from "./Dialog";

const Map = ({ data, pinToHover }) => {
  const [viewport, setViewport] = useState(null);
  const [venueDetails, setVenueDetails] = useState(null);

  useEffect(() => {
    if (data && data.region) {
      setViewport({ ...data.region.center, zoom: 12 });
    }
  }, [data]);

  const handlePinClick = async (venueDetails) => {
    setVenueDetails(venueDetails);
  };

  const handleClose = () => {
    setVenueDetails(null);
  };

  return (
    <section className="map-group flow radius">
      <div className="map-group__inner">
        <div className="map-container">
          <ReactMapGL
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/light-v9"
            mapboxApiAccessToken="pk.eyJ1IjoibmFkaWEyMDIxIiwiYSI6ImNrbmZ2bXVxYTJqanMycXRhOTcxMjRxNzQifQ.PqkggxtKPWi9hUSgZ-05Ww"
            onViewportChange={(newViewport) => setViewport(newViewport)}
            {...viewport}
          >
            <div>
              <NavigationControl
                onViewportChange={(newViewport) => setViewport(newViewport)}
              />
            </div>
            {data && data.features.length !== 0
              ? data.features.map((f) => {
                  return (
                    <Marker
                      key={f.properties.id}
                      latitude={f.geometry.coordinates[1]}
                      longitude={f.geometry.coordinates[0]}
                      offsetLeft={-19}
                      offsetTop={-38}
                    >
                      <PinIcon
                        className="map__marker"
                        color={
                          f.properties.id === pinToHover
                            ? "rgb(0,	47,	60, 0.6)"
                            : "#ff269e"
                        }
                        size={f.properties.id === pinToHover ? 50 : 40}
                      />
                    </Marker>
                  );
                })
              : null}
            {venueDetails && (
              <Dialog onClick={handleClose} venueDetails={venueDetails} />
            )}
          </ReactMapGL>
        </div>
      </div>
    </section>
  );
};

export default Map;
