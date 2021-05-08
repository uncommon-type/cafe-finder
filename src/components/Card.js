import React, { useContext, useCallback } from "react";

import HeartIcon from "./HeartIcon";
import ShortlistButton from "./ShortlistButton";
import Context from "../Context";

const Card = ({ feature, handleHover }) => {
  const { addToShortlist, removeFromShortlist, shortlist } = useContext(
    Context
  );
  const { id, name, rating, location, url } = feature.properties;

  const isInShortList = useCallback(
    (id) => {
      return !!shortlist.find((entry) => entry.id === id);
    },
    [shortlist]
  );

  return (
    <li
      onMouseEnter={handleHover ? () => handleHover(id) : null}
      onMouseLeave={handleHover ? () => handleHover(null) : null}
      className="card"
    >
      <div className="card__body">
        <h2>
          <a href={feature.properties.url}>{name}</a>
        </h2>
        <p>
          {location.city} {""}
          {location.zip_code}
        </p>
        <div className="card__footer">
          <small>Rating {rating}</small>
          <div className="card__footer__heart-btn">
            {isInShortList(id) ? (
              <button
                onClick={() => removeFromShortlist(id)}
                className="heart__button selected"
              >
                <HeartIcon />
              </button>
            ) : (
              <ShortlistButton
                onClick={() => {
                  addToShortlist(id, name, rating, location, url);
                }}
                id={id}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
