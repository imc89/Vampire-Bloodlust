import React from "react";
import "./StatusBar.css";

const StatusBar = () => {
  const energy = 10; // Número original
  const totalEnergy = 10; // Número original
  const health = 100; // Número original
  const totalHealth = 100; // Número original
  const rage = 100; // Número original
  const totalRage = 100; // Número original
  const clan = 27; // Número original

  return (
    <div className="status-bar">
      <div className="content-energy">
        <div className="data-energy">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/energy.png`} alt="energy" className="energy-icon" />
          <span className="count">{energy}/</span> <span className="count-total">{totalEnergy}</span>
        </div>
        <div>
          <span className="tag">ENERGY</span>
        </div>
      </div>

      <div className="content-health">
        <div className="data-health">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/health.png`} alt="health" className="health-icon" />
          <span className="count">{health}/</span> <span className="count-total">{totalHealth}</span>
        </div>
        <div>
          <span className="tag">HEALTH</span>
        </div>
      </div>

      <div className="content-rage">
        <div className="data-rage">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/rage.png`} alt="rage" className="rage-icon" />
          <span className="count">{rage}/</span> <span className="count-total">{totalRage}</span>
        </div>
        <div>
          <span className="tag">RAGE</span>
        </div>
      </div>

      <div className="content-clan">
        <div className="data-clan">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/clan.png`} alt="clan" className="clan-icon" />
          <span className="count">{clan}</span>
        </div>
        <div>
          <span className="tag">CLAN</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
