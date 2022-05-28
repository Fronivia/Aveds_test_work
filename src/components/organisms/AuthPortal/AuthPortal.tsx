import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './AuthPortal.module.scss';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { stores } from '@components/stores/stores';
import ModalForm from '@components/molecules/ModalForm';

export const AuthPortal: React.FC = observer(() => {
    const [modalStore] = useState(() => stores.modalStore);
    const divModalRef = useRef(null);

    const hideModal = (event: React.MouseEvent<HTMLElement>) => {
        event.target === divModalRef.current
            ? modalStore.showAuthModal()
            : false;
    };

    return createPortal(
        <div
            className={clsx(styles.modal)}
            onClick={hideModal}
            ref={divModalRef}
        >
            <ModalForm/>
        </div>
        , document.getElementById('portal'),
    );
});

