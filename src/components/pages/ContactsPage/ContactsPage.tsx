import React from 'react';
import clsx from 'clsx';
import styles from './ContactsPage.module.scss';
import Container from '@components/templates/Container';
import Contacts from '@components/organisms/Contacts';

export const ContactsPage: React.FC = () => (
    <main className={clsx(styles.main)}>
        <Container>
            <Contacts/>
        </Container>
    </main>
);
