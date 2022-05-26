import React from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';

export const Container: React.FC = ({ children }) => (
    <div className={clsx(styles.container)}>
        {children}
    </div>
);
