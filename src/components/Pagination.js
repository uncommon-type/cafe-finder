import React from "react";

const Pagination = ({ total, limit, offset }) => (
  <div className="card-group__pagination">
    <button className="btn-next">Next page</button>
    <button className="btn-prev">Previous page</button>
  </div>
);

export default Pagination;
