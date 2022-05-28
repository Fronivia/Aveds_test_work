import React from 'react';
import clsx from 'clsx';
import Container from '@components/templates/Container';
import styles from './ProfilePage.module.scss';
import GreetingsToUser from '@components/organisms/GreetingsToUser';


export const ProfilePage: React.FC = () => (
    <main className={clsx(styles.main)}>
        <Container>
            <GreetingsToUser/>
        </Container>
    </main>
);

