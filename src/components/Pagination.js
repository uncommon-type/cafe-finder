import React from "react";

const Pagination = ({ total, limit, offset, setOffset }) => (
  <div className="card-group__pagination">
    {(offset + 1) * limit <= total ? (
      <button onClick={() => setOffset(offset + limit)} className="btn-next">
        Next page
      </button>
    ) : null}
    {offset > 0 ? (
      <button onClick={() => setOffset(offset - limit)} className="btn-prev">
        Previous page
      </button>
    ) : null}
  </div>
);

export default Pagination;
