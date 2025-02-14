import React, { useState, useEffect } from "react";
import "./LevelBar.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const LevelBar = () => {
  const bloodPerMinute = 5; // Cantidad de sangre que se suma por intervalo
  const updateIntervalMinutes = 2; // Tiempo en minutos entre cada incremento

  // Obtener datos almacenados en localStorage
  const storedBloodAmount = localStorage.getItem("bloodAmount");
  const storedLastUpdate = localStorage.getItem("lastUpdate");

  // Determinar valores iniciales
  let initialBlood = storedBloodAmount ? parseInt(storedBloodAmount) : 0;
  let lastUpdate = storedLastUpdate ? parseInt(storedLastUpdate) : Date.now();

  // Calcular el tiempo transcurrido y el incremento correspondiente
  const now = Date.now();
  const timeElapsed = Math.floor((now - lastUpdate) / (updateIntervalMinutes * 60000)); // Minutos transcurridos dividido por el intervalo
  initialBlood += timeElapsed * bloodPerMinute;

  const level = 66;
  const exp = 2000;
  const nextExp = 10000;
  const [bloodAmount, setBloodAmount] = useState(initialBlood);
  const [countdown, setCountdown] = useState(updateIntervalMinutes * 60); // Cuenta atrás en segundos

  // Función para formatear el tiempo en HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? String(h).padStart(2, "0") + ":" : ""}${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => {
    // Guardar el nuevo bloodAmount y la última actualización en localStorage
    localStorage.setItem("bloodAmount", bloodAmount);
    localStorage.setItem("lastUpdate", Date.now().toString());

    const intervalId = setInterval(() => {
      setBloodAmount((prev) => {
        const newBlood = prev + bloodPerMinute;
        localStorage.setItem("bloodAmount", newBlood);
        localStorage.setItem("lastUpdate", Date.now().toString());
        return newBlood;
      });
      setCountdown(updateIntervalMinutes * 60); // Reiniciar la cuenta atrás
    }, updateIntervalMinutes * 60000); // Intervalo definido por el usuario

    // Cuenta regresiva cada segundo
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownInterval);
    };
  }, [bloodAmount]);

  return (
    <div className="level-bar">
      <div className="blood-status">
        <div className="blood-amount">
        <span className="blood-count">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/blood.png`} alt="blood" className="blood-icon" />
          {bloodAmount.toLocaleString()}
        </span>
        {/* CUANDO HAYA MINIONS SE DEBERÁ PONER EN VEZ DE BLOOD {CANTIDAD} IN .... TIEMPO */}
        <span className="blood-tag">BLOOD</span>
        </div>
        <div className="blood-counter">
          <span>
           {formatTime(countdown)}
          </span>
        </div>
      </div>

      <div className="levelExp-status">
        <div className="level-status">
          <img src={`${process.env.PUBLIC_URL}/interface/icons/bracket_1.png`} alt="blood" className="bracket" />
          <span className="level-tag">{level}</span>
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
