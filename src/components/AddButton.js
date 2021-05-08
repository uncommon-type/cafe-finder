import React from "react";

import HeartIcon from ".//HeartIcon";

const AddButton = ({ id, onAdd }) => {
  return (
    <div className="heart">
      <button className="heart__button">
        <HeartIcon />
      </button>
    </div>
  );
};

export default AddButton;
