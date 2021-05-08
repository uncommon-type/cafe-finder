import React from "react";

import ShortlistButton from "./ShortlistButton";

const Card = () => {
  return (
    <li className="card">
      <div className="card__body">
        <h2>
          <a href="">Monmouth Coffee</a>
        </h2>
        <p>London WC2H 9EU</p>
        <div className="card__footer">
          <small>Rating 4.5</small>
          <div className="card__footer__heart-btn">
            <ShortlistButton />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
