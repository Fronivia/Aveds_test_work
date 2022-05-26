import React from 'react';
import styles from './MedicCard.module.scss';
import clsx from 'clsx';
import { ICardsInformation } from '@src/constants/types';

export const MedicCard: React.FC<ICardsInformation> = ({ Icon, text }) => (
    <div className={clsx(styles.medicCard)}>
        <div className={clsx(styles.redCircle)}>
            <Icon/>
        </div>
        <h5 className={clsx(styles.serviceName)}>{text}</h5>
        <div className={clsx(styles.separator)}/>
        <p className={clsx(styles.serviceDescription)}>Рыба текст</p>
    </div>
);
