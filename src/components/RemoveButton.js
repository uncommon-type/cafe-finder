import React, { useContext } from "react";
import Context from "../Context";
import HeartIcon from "./HeartIcon";

const RemoveButton = ({ id }) => {
  const { onRemove } = useContext(Context);
  return (
    <div className="heart">
      <button onClick={() => onRemove(id)} className="heart__button">
        <HeartIcon />
      </button>
    </div>
  );
};

export default RemoveButton;
