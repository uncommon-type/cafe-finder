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
  const [error, setError] = useState(null);

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    setStatus("loading");

    const searchVenues = async (searchTerm) => {
      try {
        let data = await client(
          `/.netlify/functions/search?location=${encodeURIComponent(
            searchTerm
          )}`
        );

        if (data.error) {
          setError(error);
          setStatus("error");
        }

        const geojsonifiedData = geojsonify(data);
        setData(geojsonifiedData);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setError(error);
        setStatus("error");
      }
    };
    searchVenues(searchTerm);
  }, [searchTerm]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return isSuccess ? (
    data && data.features ? (
      <>
        <Nav initialSearch={initialSearch} />
        <div className="app__body splitter gap-top-600">
          <CardList data={data} />
          <Map data={data} />
        </div>
      </>
    ) : (
      <ErrorMessage error={error} />
    )
  ) : null;
};

export default ViewSearchResults;
