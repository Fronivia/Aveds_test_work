import React from 'react';
import styles from './Contacts.module.scss';
import clsx from 'clsx';

export const Contacts:React.FC = () => (
    <article className={clsx(styles.contacts)}>
        <h1 className={clsx(styles.contactsHeader)}>Контакты</h1>
    </article>
);
