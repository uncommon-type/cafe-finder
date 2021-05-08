import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import SearchBar from "./containers/SearchBar";
import ViewSearchResults from "./containers/ViewSearchResults";

import Context from "./Context";

const Root = () => {
  const defaultShortlist = localStorage.getItem("shortlist")
    ? JSON.parse(localStorage.getItem("shortlist"))
    : [];

  const [shortlist, setShortlist] = useState(defaultShortlist);

  useEffect(() => {
    localStorage.setItem("shortlist", JSON.stringify(shortlist));
  }, [shortlist]);

  const addToShortlist = (id, name, rating, location, url) => {
    setShortlist([...shortlist, { id, name, rating, location, url }]);
  };

  const removeFromShortlist = (id) => {
    setShortlist(shortlist.filter((venue) => venue.id !== id));
  };

  return (
    <Router>
      <SearchBar initialSearch="london" />
      <main>
        <article className="app">
          <ViewSearchResults initialSearch="london" />
        </article>
      </main>
    </Router>
  );
};

export default Root;
