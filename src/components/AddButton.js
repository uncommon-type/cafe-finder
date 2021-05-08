import React, { useContext } from "react";

import Context from "../Context";
import HeartIcon from ".//HeartIcon";

const AddButton = ({ id, onAdd }) => {
  const { shortlist } = useContext(Context);
  return (
    <div className="heart">
      <button className="heart__button">
        <HeartIcon />
      </button>
    </div>
  );
};

export default AddButton;
