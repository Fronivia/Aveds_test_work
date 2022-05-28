import { ModalStore } from '@components/stores/ModalStore';
import { AuthorizationStore } from '@components/stores/AuthorizationStore';

export const stores = {
    modalStore: new ModalStore(),
    authorizationStore: new AuthorizationStore(),
};
