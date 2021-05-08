import React from "react";

import Pagination from "./Pagination";
import Card from "./Card";
import Dialog from "./Dialog";

const CardList = ({ data, setOffset }) => {
  return (
    <section className="card-group flow bg-primary color-light">
      <div className="card-group__inner">
        <ul id="card-list">
          <Card />
        </ul>
        {/* <Dialog /> */}
        <Pagination
          total={data.total}
          limit={data.limit}
          offset={data.offset}
          setOffset={setOffset}
        />
      </div>
    </section>
  );
};

export default CardList;
