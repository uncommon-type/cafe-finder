import React from "react";

import Pagination from "./Pagination";
import Card from "./Card";
import Dialog from "./Dialog";

const CardList = () => {
  return (
    <section className="card-group flow bg-primary color-light">
      <div className="card-group__inner">
        <ul id="card-list">
          <Card />
        </ul>
        {/* <Dialog /> */}
        <Pagination />
      </div>
    </section>
  );
};

export default CardList;
