import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import SearchBar from "./containers/SearchBar";
import ViewSearchResults from "./containers/ViewSearchResults";

const Root = () => {
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
