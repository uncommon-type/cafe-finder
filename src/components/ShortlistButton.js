import React, { useContext } from "react";

import clsx from "clsx";
import Context from "../Context";
import HeartIcon from "./HeartIcon";

const ShortlistButton = ({ onClick, id }) => {
  const { shortlist } = useContext(Context);
  return (
    <div className="heart">
      <button className="heart__button">
        <HeartIcon />
      </button>
    </div>
  );
};

export default ShortlistButton;
