import React from 'react';
import Container from '@components/templates/Container';
import styles from './FeedPage.module.scss';
import clsx from 'clsx';
import CardList from '@components/organisms/CardList';
import GreetingsToAnonym from '@components/organisms/GreetingsToAnonym';

export const FeedPage: React.FC = () => (
    <main className={clsx(styles.main)}>
        <Container>
            <GreetingsToAnonym/>
            <CardList/>
        </Container>
    </main>
);

