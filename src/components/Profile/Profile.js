import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src="avatar.png" alt="Vampire Avatar" className="avatar" />
      <h2>Vampire</h2>
      <p>Level: 66</p>
      <button className="upgrade-btn">Upgrade</button>
      <button className="recruit-btn">Recruit</button>
      <p>Your Player ID: 4501 7998 60</p>
    </div>
  );
};

export default Profile;
