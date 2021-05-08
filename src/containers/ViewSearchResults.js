import React, { useState, useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { parse } from "query-string";

import { client } from "../utils/api-client";
import { geojsonify } from "../utils/geojsonify";

import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import CardList from "../components/CardList";
import Nav from "../components/Nav";
import Map from "../components/Map";

const ViewSearchResults = ({ initialSearch }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  return (
    <>
      <Nav initialSearch={initialSearch} />
      <div className="app__body splitter gap-top-600">
        <CardList />
        <Map />
      </div>
    </>
  );
};

export default ViewSearchResults;
