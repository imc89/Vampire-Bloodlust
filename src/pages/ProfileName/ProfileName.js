import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileName.css";

const ProfileName = () => {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const playerName = localStorage.getItem("playerName");
    if (playerName) {
      setStoredName(playerName);
    }
  }, []);

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem("playerName", name);
      setStoredName(name);
      navigate("/main"); // Redirigir a Main después de guardar el nombre
    }
  };

  const handleClickOnName = () => {
    navigate("/main"); // Redirigir a Main si hay nombre guardado
  };

  return (
    <div className="profile-container">
      <img src={`${process.env.PUBLIC_URL}/interface/header/header.png`} alt="header" className="profile-header" />
      <div className="profile-content">
        {storedName ? (
          <h2 className="profile-name" onClick={handleClickOnName}>
            {storedName}
          </h2>
        ) : (
          <>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="profile-input"
            />
            <button onClick={handleSubmit} className="profile-button">
             <img  className="send-button" alt="name-button" src={`${process.env.PUBLIC_URL}/interface/buttons/button.png`} />
             <span className="button-text">ENVIAR</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileName;
