import React, { useContext } from "react";

import clsx from "clsx";
import Context from "../Context";
import HeartIcon from "./HeartIcon";

const ShortlistButton = ({ onClick, id }) => {
  const { shortlist } = useContext(Context);
  return (
    <div className="heart">
      <button
        onClick={onClick}
        className={clsx(
          "heart__button",
          shortlist.includes(id) && "heart__button-active"
        )}
      >
        <HeartIcon />
      </button>
    </div>
  );
};

export default ShortlistButton;
