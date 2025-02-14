import React from "react";
import "./Profile.css";

const Profile = () => {
  const playerId = '4501 5485 5386 9631'; 
  const playerName = 'Player Name'; 
  const level = 66; //se recoge mismo dato que en el LevelBar

  return (
    <div className="frame-container">
      <img
        src={`${process.env.PUBLIC_URL}/interface/frames/profile_frame.png`}
        alt="profile_frame"
        className="profile-frame"
      />
      <span className="profile-name">{playerName}</span>
      <span className="profile-level-tag">Level :</span>
      <span className="profile-level">{level}</span>

      <div className="profile-image">
      <img src={`${process.env.PUBLIC_URL}/interface/avatar/male_1.png`} alt='male' className="profile-image" />
      </div>
      <div className="profile-id">
        <span>YOUR PLAYER ID:</span>
        <span className="id-number">{playerId}</span>
      </div>
    </div>
  );
};

export default Profile;
