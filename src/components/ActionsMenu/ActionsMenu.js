import React from "react";
import "./ActionsMenu.css";

const ActionsMenu = () => {
  const buttons = [
    { src: `${process.env.PUBLIC_URL}/interface/buttons/Missions.png`, alt: "Missions", hasText: false },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/Bazaar.png`, alt: "Bazaar", hasText: false },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/Fight.png`, alt: "Fight", hasText: false },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/button.png`, alt: "News", hasText: true },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/button.png`, alt: "Minions", hasText: true },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/button.png`, alt: "My Clan", hasText: true },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/button.png`, alt: "Options", hasText: true },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/button.png`, alt: "Crypt", hasText: true },
    { src: `${process.env.PUBLIC_URL}/interface/buttons/button.png`, alt: "Elders", hasText: true },
  ];

  return (
    <div className="menu">
      {buttons.map((button, index) => (
        <div key={index} className="menu-button">
          {/* <button> */}
          <img src={button.src} alt={button.alt} className="button-image" />
          {button.hasText && <span className="button-text">{button.alt}</span>}
          {/* </button> */}
        </div>
      ))}
    </div>
  );
};

export default ActionsMenu;
