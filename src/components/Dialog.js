import React from "react";

import CloseIcon from "./CloseIcon";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const Dialog = ({ venueDetails, onClick }) => {
  const id = venueDetails.properties.id;
  return (
    <div className="shortlist-dialog">
      <div className="shortlist-dialog__inner">
        <button className="shortlist-dialog__button">
          <CloseIcon />
        </button>
        <header className="dialog__header">
          <h1>Monmouth Coffee</h1>
          <strong className="dialog__header__strong">Rating 4.5</strong>
        </header>
        <section className="dialog__img">
          <div className="dialog__img__inner">
            <div className="img-container">
              <img src="" alt="" />
            </div>

            <figcaption className="img-caption">
              <span className="img-caption__where font-sans weight-bold">
                Where
              </span>
              <span className="img-caption__location">London W1H 7JN</span>
            </figcaption>
          </div>
        </section>
        <section className="dialog__body">
          <a href="" className="visit-btn">
            Visit website
          </a>
          <div className="container">
            <div className="container__content">
              <h3 className="">Contact</h3>
              <p>+442075637222</p>
            </div>
            <div className="container__content">
              <h3> Price</h3>
              <p>$$</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dialog;
