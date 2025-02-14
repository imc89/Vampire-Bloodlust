import React from 'react';
import LevelBar from '../../components/LevelBar/LevelBar';
import StatusBar from '../../components/StatusBar/StatusBar';
import Profile from '../../components/Profile/Profile';
import ActionsMenu from '../../components/ActionsMenu/ActionsMenu';

import NoCopyImages from  '../../components/NoCopyImages/NoCopyImages';

import './Main.css';

const Main = () => {

    return (
        <div className='background'>
            <NoCopyImages>
            <LevelBar />
            <StatusBar />
            <Profile />
            <ActionsMenu />
            </NoCopyImages>
        </div>
    );
};

export default Main;