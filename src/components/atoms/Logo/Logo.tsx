import React from "react";
import IconLogo from '@assets/icon/logo.svg';
import styles from './Logo.module.scss';
import { Link } from "react-router-dom";
import { MAIN_PAGE } from "@src/constants/routes";
import clsx from "clsx";

export const Logo: React.FC = () => (
    <Link to={MAIN_PAGE} className={clsx(styles.iconLogo)}>
        <IconLogo/>
    </Link>
);
