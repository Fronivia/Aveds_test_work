import React from 'react';
import styles from './NavigationButton.module.scss';
import clsx from 'clsx';

interface INavButtonProps {
    filled: boolean,
    text: string,
    onClickHandler: () => void,
}

export const NavigationButton: React.FC<INavButtonProps> = ({
    text,
    filled,
    onClickHandler,
}) => (
    <button
        className={
            clsx(
                styles.navigationButton,
                !filled && styles.filledNavigationButton,
            )
        }
        onClick={onClickHandler}
    >
        {text}
    </button>
);
