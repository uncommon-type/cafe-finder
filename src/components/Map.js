import React, { useEffect, useState } from "react";

import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import PinIcon from "./PinIcon";
import Dialog from "./Dialog";

const Map = ({ data }) => {
  return (
    <section className="map-group flow radius">
      <div className="map-group__inner">
        <div className="map-container">
          <ReactMapGL mapboxApiAccessToken="pk.eyJ1IjoibmFkaWEyMDIxIiwiYSI6ImNrbmZ2bXVxYTJqanMycXRhOTcxMjRxNzQifQ.PqkggxtKPWi9hUSgZ-05Ww">
            {/* <Dialog /> */}
          </ReactMapGL>
        </div>
      </div>
    </section>
  );
};

export default Map;
