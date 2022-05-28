import React, { useState } from 'react';
import Header from '@components/organisms/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MAIN_PAGE, PROFILE, CONTACTS_PAGE } from '@src/constants/routes';
import FeedPage from '@components/pages/FeedPage';
import ProfilePage from '@components/pages/ProfilePage';
import ContactsPage from '@components/pages/ContactsPage';
import { observer } from 'mobx-react-lite';
import { stores } from '@components/stores/stores';


const App = observer(() => {
    const [authStore] = useState(() => stores.authorizationStore);
    return (
        <>
            <Header/>
            <Routes>
                <Route path={ MAIN_PAGE } element={<FeedPage/>}/>
                <Route path={ CONTACTS_PAGE } element={<ContactsPage/>}/>

                {
                    authStore.logged
                    && <Route path={ PROFILE } element={<ProfilePage/>}/>
                }
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </>
    );
});

export default App;
