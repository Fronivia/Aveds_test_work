import React from 'react';
import styles from './NavItem.module.scss';
import { Link } from 'react-router-dom';
import clsx from "clsx";

interface INavProps {
    path: string,
    text: string,
}

export const NavItem: React.FC<INavProps> = ({ path, text }) => (
    <Link to={path} className={clsx(styles.navItem)}>
        {text}
    </Link>
);

