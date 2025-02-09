import React from "react";
import "./ActionButton.css";

const ActionButton = ({ label }) => {
  return <button className="action-button">{label}</button>;
};

export default ActionButton;
