import React, { useState, useEffect } from "react";

import CloseIcon from "./CloseIcon";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const Dialog = ({ venueDetails, onClick }) => {
  const id = venueDetails.properties.id;
  const [venueInfo, setVenueInfo] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchVenueDetails = async (id) => {
      setStatus("loading");
      try {
        const res = await fetch(`/.netlify/functions/getVenueInfo?id=${id}`);
        const data = await res.json();
        setVenueInfo(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setError(error);
        setStatus("error");
      }
    };

    fetchVenueDetails(id);
  }, [id, setVenueInfo]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return isSuccess ? (
    venueInfo !== null ? (
      <div className="shortlist-dialog">
        <div className="shortlist-dialog__inner">
          <button onClick={onClick} className="shortlist-dialog__button">
            <CloseIcon />
          </button>
          <header className="dialog__header">
            <h1>{venueInfo.name}</h1>
            <strong className="dialog__header__strong">
              Rating {venueInfo.rating}
            </strong>
          </header>
          <section className="dialog__img">
            <div className="dialog__img__inner">
              <div className="img-container">
                <img src={venueInfo.image_url} alt={venueInfo.name} />
              </div>

              <figcaption className="img-caption">
                <span className="img-caption__where font-sans weight-bold">
                  Where
                </span>
                <span className="img-caption__location">
                  {venueInfo.location.city} {""} {venueInfo.location.zip_code}
                </span>
              </figcaption>
            </div>
          </section>
          <section className="dialog__body">
            <a href={venueInfo.url} className="visit-btn">
              Visit website
            </a>
            <div className="container">
              <div className="container__content">
                <h3 className="">Contact</h3>
                <p> {venueInfo.phone}</p>
              </div>
              <div className="container__content">
                <h3> Price</h3>
                <p>{venueDetails.properties.price}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    ) : (
      <ErrorMessage error={error} />
    )
  ) : null;
};

export default Dialog;
