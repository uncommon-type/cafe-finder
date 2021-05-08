import React, { useEffect, useState } from "react";

import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import PinIcon from "./PinIcon";
import Dialog from "./Dialog";

const Map = ({ data }) => {
  return (
    <section className="map-group flow radius">
      <div className="map-group__inner">
        <div className="map-container">{/* <Dialog /> */}</div>
      </div>
    </section>
  );
};

export default Map;
