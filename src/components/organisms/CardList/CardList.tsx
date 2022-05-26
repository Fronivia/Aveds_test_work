import React from 'react';
import clsx from 'clsx';
import styles from './CardList.module.scss';
import MedicCard from '@components/molecules/MedicCard';
import Cardiogram from '@assets/icon/cardiogram.svg';
import MedicalHistory from '@assets/icon/medicalHistory.svg';
import Stethoscope from '@assets/icon/stethoscope.svg';
import { ICardsInformation } from '@src/constants/types';

const cardsInformation: Array<ICardsInformation> = [
    { Icon: Cardiogram, text: 'Онлайн-прием', key: 1 },
    { Icon: Stethoscope, text: 'Экстренный Случай', key: 2 },
    { Icon: MedicalHistory, text: 'Лечение рака', key: 3 },
];

export const CardList: React.FC = () => {
    return (
        <article className={clsx(styles.medicCardContainer)}>
            {
                cardsInformation.map(({ key, ...props } ) => (
                    <MedicCard key={key} {...props}/>
                ))
            }
        </article>
    );
};
