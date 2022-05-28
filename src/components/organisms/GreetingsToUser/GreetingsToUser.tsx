import React, { useState } from 'react';
import NavigationButton from '@components/atoms/NavigationButton';
import styles from './GreetingsToUser.module.scss';
import { observer } from 'mobx-react-lite';
import { stores } from '@components/stores/stores';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_PAGE, MAIN_PAGE } from '@src/constants/routes';

export const GreetingsToUser: React.FC = observer(() => {
    const [authStore] = useState( () => stores.authorizationStore);
    const navigate = useNavigate();
    const redirectToContacts = () => {
        navigate(CONTACTS_PAGE);
    };
    const exit = () => {
        authStore.exitFromSite();
        navigate(MAIN_PAGE);
    };

    return (
        <article className={clsx(styles.greetingsToAnon)}>
            <h1 className={clsx(styles.greetingsHeader)}>Привет, {authStore.name}</h1>
            <NavigationButton
                filled={true} text="Выйти из аккаунта"
                onClickHandler={exit}
            />
            <NavigationButton
                filled={false}
                text="Перейти в контакты"
                onClickHandler={redirectToContacts}
            />
        </article>
    );
});
