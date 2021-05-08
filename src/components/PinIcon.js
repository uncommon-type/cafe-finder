import React from "react";
import PlaceTwoToneIcon from "@material-ui/icons/PlaceTwoTone";

const PinIcon = ({ size, color, onClick }) => (
  <PlaceTwoToneIcon onClick={onClick} style={{ fontSize: size, color }} />
);
export default PinIcon;
