import React, { useState } from 'react';
import clsx from 'clsx';
import NavigationButton from '@components/atoms/NavigationButton';
import styles from './GreetingsToAnonym.module.scss';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_PAGE } from '@src/constants/routes';
import { stores } from '@components/stores/stores';

export const GreetingsToAnonym:React.FC = observer(() => {
    const [modalStore] = useState( () => stores.modalStore);
    const [authStore] = useState( () => stores.authorizationStore);
    const navigate = useNavigate();
    const redirectToContacts = () => {
        navigate(CONTACTS_PAGE);
    };

    return (
        <article className={clsx(styles.greetings)}>
            <h1 className={clsx(styles.greetingsHeader)}>
                Место для получения медицинской помощи
            </h1>

            {
                authStore.logged
                    ? <NavigationButton
                        filled={true} text="Выйти из аккаунта"
                        onClickHandler={authStore.exitFromSite}
                    />
                    : <NavigationButton
                        filled={true}
                        text="Войти"
                        onClickHandler={modalStore.showAuthModal}
                    />
            }
            <NavigationButton
                filled={false}
                text="Контакты"
                onClickHandler={redirectToContacts}
            />
        </article>
    );
});
