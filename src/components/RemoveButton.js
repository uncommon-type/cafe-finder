import React from "react";
import HeartIcon from "./HeartIcon";

const RemoveButton = ({ id }) => {
  return (
    <div className="heart">
      <button className="heart__button">
        <HeartIcon />
      </button>
    </div>
  );
};

export default RemoveButton;
