import React, { useState, useContext } from "react";

import Context from "../Context";
import ShortlistDialog from "./ShortlistDialog";

const Nav = () => {
  const [shortlistOpen, setShortlistOpen] = useState(false);
  const { shortlist } = useContext(Context);

  const handleShortlistOpen = () => {
    setShortlistOpen(true);
  };

  const handleShortlistClose = () => {
    setShortlistOpen(false);
  };

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
      {shortlistOpen ? (
        <ShortlistDialog closeShortlist={handleShortlistClose} />
      ) : null}
    </>
  );
};
export default Nav;
