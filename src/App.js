import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// PAGES
import ProfileName from './pages/ProfileName/ProfileName';
import Main from "./pages/Main/Main"; // Nueva página principal después del nombre

// import Search from './pages/SearchText/SearchText';
// import Images from './pages/SearchImages/SearchImages';
// import Graph from './pages/Graph/Graph';
// COMPONENTS
// import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  // STATE TO SHOW/HIDE THE SPLASHSCREEN
  // ESTADO PARA MOSTRAR/OCULTAR EL SPLASHSCREEN
  const [showSplash, setShowSplash] = useState(true);
  const [playerName, setPlayerName] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    if (storedName) {
      setPlayerName(storedName);
    }
  }, []);

  // METHOD TO GET OUT OF SPLASHSCREEN
  // METODO PARA SALIR DEL SPLASHSCREEN
  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <Router basename="/Vampire-Bloodlust">
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <Routes>
          {/* Redirige a Main si hay nombre guardado */}
          <Route
            path="/"
            element={playerName ? <Main /> : <ProfileName />}
          />

          {/* Ruta para Main */}
          <Route path="/main" element={<Main />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;