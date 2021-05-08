import React from "react";

const Pagination = ({ total, limit, offset }) => (
  <div className="card-group__pagination">
    {(offset + 1) * limit <= total ? (
      <button className="btn-next">Next page</button>
    ) : null}

    {offset > 0 ? <button className="btn-prev">Previous page</button> : null}
  </div>
);

export default Pagination;
