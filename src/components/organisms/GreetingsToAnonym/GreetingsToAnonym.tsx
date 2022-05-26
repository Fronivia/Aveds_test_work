import React from 'react';
import clsx from 'clsx';
import NavigationButton from '@components/atoms/NavigationButton';
import styles from './GreetingsToAnonym.module.scss';

export const GreetingsToAnonym:React.FC = () => (
    <article className={clsx(styles.greetings)}>
        <h1 className={clsx(styles.greetingsHeader)}>
            Место для получения медицинской помощи
        </h1>
        <NavigationButton filled={true} text="Войти"/>
        <NavigationButton filled={false} text="Контакты"/>
    </article>
);
