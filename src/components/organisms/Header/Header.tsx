import React from 'react';
import styles from './Header.module.scss';
import clsx from "clsx";
import Logo from "@components/atoms/Logo";
import AuthButton from "@components/atoms/AuthButton";
import Navbar from "@components/molecules/Navbar";


export const Header: React.FC = () => {
    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.headerContainer)}>
                <Logo/>
                <Navbar/>
                <AuthButton/>
            </div>
        </header>
    );
};

