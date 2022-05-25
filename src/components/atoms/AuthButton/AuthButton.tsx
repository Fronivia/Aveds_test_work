import React from "react";
import styles from './AuthButton.module.scss';
import clsx from "clsx";

export const AuthButton: React.FC = () => (
    <button className={clsx(styles.authButton)}>Войти</button>
);
