import React from "react";
import "./LevelBar.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const LevelBar = () => {
  const bloodAmount = 6666666; // Número original
  const exp = 2000; // Número original
  const nextExp = 10000; // Número original

  const formattedBloodAmount = bloodAmount.toLocaleString(); // Formatear el número

  return (
    <div className="level-bar">
      <div className="blood-status">
        <span className="blood-count">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/blood.png`} alt="blood" className="blood-icon" />
          {formattedBloodAmount}
        </span>
        <span className="blood-tag">BLOOD</span>
      </div>

      <div className="levelExp-status">
        <div className="level-status">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/bracket_1.png`} alt="blood" className="bracket" />
          <span className="level-tag">500</span>
          <img src={`${process.env.PUBLIC_URL}/interface/icons/bracket_2.png`} alt="blood" className="bracket" />
          <ProgressBar />
        </div>
        <div className="exp-status">
          <span className="exp-tag">LEVEL | EXP: {exp}/{nextExp} </span>
        </div>
      </div>

      <div className="help">
        <button className="help-button">
          <span className="help-mark">?</span>
          <span className="help-text">HELP</span>
        </button>
      </div>
    </div>
  );
};

export default LevelBar;
