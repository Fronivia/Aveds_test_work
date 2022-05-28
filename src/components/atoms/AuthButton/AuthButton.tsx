import React, { useState } from 'react';
import styles from './AuthButton.module.scss';
import clsx from "clsx";
import { observer } from 'mobx-react-lite';
import { stores } from '@components/stores/stores';

export const AuthButton: React.FC = observer(() => {
    const [modalStore] = useState(() => stores.modalStore);
    const [authStore] = useState( () => stores.authorizationStore);

    return (
        <button
            className={clsx(styles.authButton)}
            onClick={authStore.logged ? authStore.exitFromSite : modalStore.showAuthModal}
        >
            {authStore.logged ? 'Выйти' : 'Войти'}
        </button>
    );
});
