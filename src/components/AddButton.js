import React, { useContext } from "react";

import Context from "../Context";
import HeartIcon from ".//HeartIcon";

const AddButton = ({ id, onAdd }) => {
  const { shortlist } = useContext(Context);
  return (
    <div className="heart">
      <button
        onClick={() => onAdd(id)}
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

export default AddButton;
