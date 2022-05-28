import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ModalForm.module.scss';
import FormInput from '@components/atoms/FormInput';
import { FormTypes } from '@src/constants/types';
import { observer } from 'mobx-react-lite';
import { stores } from '@components/stores/stores';
import { useNavigate } from 'react-router-dom';
import { PROFILE } from '@src/constants/routes';

export const ModalForm: React.FC = observer(() => {
    const [authStore] = useState(
        () => stores.authorizationStore,
    );
    const [modalStore] = useState(
        () => stores.modalStore,
    );

    const navigate = useNavigate();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const success = authStore.authorization();
        if (success) {
            navigate(PROFILE);
            modalStore.showAuthModal();
        } else {
            authStore.validateData(false);
        }
    };

    const warning = <p className={clsx(styles.warning)}>Требуется больше символов</p>;
    return (
        <form className={clsx(styles.modalForm)} onSubmit={submitHandler}>
            <h2 className={clsx(styles.formHeader)}>Авторизация</h2>
            <FormInput
                description="Логин"
                type={FormTypes.TEXT}
                changeHandler={authStore.changeLoginData}
            />
            {authStore.loginValidated ? '' : warning}
            <FormInput
                description="Пароль"
                type={FormTypes.PASSWORD}
                changeHandler={authStore.changePasswordData}
            />
            {authStore.passwordValidated ? '' : warning}
            <input type="submit" value="Отправить" className={clsx(styles.submit)}/>
            {authStore.isDataCorrect
                ? false
                : <p className={clsx(styles.warning)}>Вход не удался</p>}
        </form>
    );
});

