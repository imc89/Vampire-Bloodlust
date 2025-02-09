import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import "./ActionsMenu.css";

const ActionsMenu = () => {
  return (
    <div className="actions-menu">
      <ActionButton label="Missions" />
      <ActionButton label="Bazaar" />
      <ActionButton label="Fight" />
      <ActionButton label="News" />
      <ActionButton label="Minions" />
      <ActionButton label="My Clan" />
      <ActionButton label="Options" />
      <ActionButton label="Crypt" />
      <ActionButton label="Elders" />
    </div>
  );
};

export default ActionsMenu;
