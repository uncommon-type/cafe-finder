import React from "react";

import ShortlistDialog from "./ShortlistDialog";

const Nav = () => {
  return (
    <>
      <div className="app__nav splitter gap-top-700">
        <aside>
          <button className="shortlist-button">
            <strong>See shortlist</strong>
          </button>
          <button className="share-button">Share</button>
        </aside>
      </div>
      {/* <ShortlistDialog /> */}
    </>
  );
};
export default Nav;
