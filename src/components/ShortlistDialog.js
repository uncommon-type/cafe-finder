import React, { useContext } from "react";

import CloseIcon from "./CloseIcon";
import Card from "./Card";
import Context from "../Context";

const ShortlistDialog = ({ closeShortlist }) => {
  return (
    <div className="shortlist-dialog">
      <div className="shortlist-dialog__inner">
        <button className="shortlist-dialog__button">
          <CloseIcon />
        </button>
        <ul className="shortlist-dialog__list">
          <Card />;
        </ul>
      </div>
    </div>
  );
};

export default ShortlistDialog;
