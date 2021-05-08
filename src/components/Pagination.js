import React from "react";

const Pagination = ({ total, limit, offset }) => (
  <div className="card-group__pagination">
    <button className="btn-next">Next page</button>

    {offset > 0 ? <button className="btn-prev">Previous page</button> : null}
  </div>
);

export default Pagination;
