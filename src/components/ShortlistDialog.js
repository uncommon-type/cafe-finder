import React, { useContext } from "react";

import CloseIcon from "./CloseIcon";
import Card from "./Card";
import Context from "../Context";

const ShortlistDialog = ({ closeShortlist }) => {
  const { shortlist } = useContext(Context);

  return (
    <div className="shortlist-dialog">
      <div className="shortlist-dialog__inner">
        <button onClick={closeShortlist} className="shortlist-dialog__button">
          <CloseIcon />
        </button>

        {shortlist.length === 0 ? (
          <p className="shortlist-dialog__inner__msg">
            Your shortlist is empty{" "}
          </p>
        ) : (
          <ul className="shortlist-dialog__list">
            {shortlist.map((item) => {
              const feature = { properties: item };
              return <Card key={item.id} feature={feature} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShortlistDialog;
