import React from 'react';
import styles from './NavigationButton.module.scss';
import clsx from 'clsx';

interface INavButtonProps {
    filled: boolean,
    text: string,
}

export const NavigationButton: React.FC<INavButtonProps> = ({
    text,
    filled,
}) => (
    <button className={
        clsx(
            styles.navigationButton,
            !filled && styles.filledNavigationButton,
        )
    }>
        {text}
    </button>
);
