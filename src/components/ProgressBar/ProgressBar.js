import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
    const [percent, setPercent] = useState(0);

    // Actualizar el progreso cuando cambia la variable
    useEffect(() => {
        setPercent((progress / 120) * 100); // Ajusta 120 al valor máximo
    }, [progress]);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-background">
                <div className="progress-bar" style={{ width: `${100}%` }} />
            </div>
        </div>
    );
};

export default ProgressBar;
