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
          <button onClick={handleShortlistOpen} className="shortlist-button">
            {shortlist.length > 0 ? (
              <>
                <strong>See shortlist</strong> ({shortlist.length})
              </>
            ) : (
              <>Shortlist is empty</>
            )}
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
