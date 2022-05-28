import { action, makeObservable, observable } from 'mobx';

export class ModalStore {
    constructor() {
        makeObservable(this, {
            loginAttempt: observable,
            showAuthModal: action.bound,
        });
    }

    public loginAttempt : boolean = false;
    public showAuthModal(): void {
        this.loginAttempt = !this.loginAttempt;
    }
}
