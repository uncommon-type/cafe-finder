import React from "react";

const SearchBar = ({ initialSearch }) => {
  return (
    <header>
      <div className="site-head">
        <div className="site-head__inner">
          <form className="search-form">
            <label htmlFor="query" className="search-form__label">
              Search query
            </label>
            <input
              className="search-form__input"
              name="query"
              id="query"
              required=""
              placeholder="city"
              defaultValue={initialSearch}
            />
            <button type="submit" className="search-form__button"></button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
