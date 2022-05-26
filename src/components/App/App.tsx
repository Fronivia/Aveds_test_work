import React from 'react';
import styles from './app.module.scss';
import Header from '@components/organisms/Header';
import { Routes, Route } from 'react-router-dom';
import { MAIN_PAGE } from '@src/constants/routes';
import FeedPage from '@components/pages/FeedPage';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={ MAIN_PAGE } element={<FeedPage/>}/>
            </Routes>
        </>
    );
};

export default App;
