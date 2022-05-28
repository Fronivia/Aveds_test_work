import React, { useState } from 'react';
import styles from './Header.module.scss';
import clsx from "clsx";
import Logo from "@components/atoms/Logo";
import AuthButton from "@components/atoms/AuthButton";
import Navbar from "@components/molecules/Navbar";
import AuthPortal from '@components/organisms/AuthPortal';
import { observer } from 'mobx-react-lite';
import { stores } from '@components/stores/stores';


export const Header: React.FC = observer(() => {
    const [modalStore] = useState(() => stores.modalStore);

    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.headerContainer)}>
                <Logo/>
                <Navbar/>
                <AuthButton/>
                { modalStore.loginAttempt && <AuthPortal/>}
            </div>
        </header>
    );
});

