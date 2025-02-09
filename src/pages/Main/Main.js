import React from 'react';
import LevelBar from '../../components/LevelBar/LevelBar';
import StatusBar from '../../components/StatusBar/StatusBar';
import Profile from '../../components/Profile/Profile';
import ActionsMenu from '../../components/ActionsMenu/ActionsMenu';

import './Main.css';

const Main = () => {

    return (
        <div>
            <LevelBar />
            {/* <StatusBar />
            <Profile />
            <ActionsMenu /> */}
        </div>
    );
};

export default Main;