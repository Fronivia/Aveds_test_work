import { action, makeObservable, observable } from 'mobx';
import userData from '@assets/userData/userData.json';
import React from 'react';

interface IUserData2 {
    login: string,
    password: string,
    name: string
}

interface IUserData {
    [key: string]: IUserData2
}

export class AuthorizationStore {
    constructor() {
        makeObservable(this, {
            login: observable,
            password: observable,
            loginValidated: observable,
            passwordValidated: observable,
            logged: observable,
            isDataCorrect: observable,
            name: observable,
            changeLoginData: action.bound,
            changePasswordData: action.bound,
            authorization: action.bound,
            exitFromSite: action.bound,
            validateData: action.bound,
        });
    }

    public login: string = '';
    public password: string = '';
    public loginValidated: boolean = true;
    public passwordValidated: boolean = true;
    public logged: boolean = !!localStorage.getItem('logged') || false;
    public name: string = localStorage.getItem('name') || '';
    public isDataCorrect: boolean = true;
    private userData: IUserData = userData;
    public changeLoginData(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        this.loginValidated = value.length >= 3;
        this.login = value;
    }

    public changePasswordData(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        this.passwordValidated = value.length >= 8;
        this.password = value;
    }

    public exitFromSite = () => {
        this.logged = false;
        this.removeData();
    };

    public validateData = (success: boolean) => {
        this.isDataCorrect = success;
    };

    private setData(name: string) {
        this.name = name;
        localStorage.setItem('name', name);
        localStorage.setItem('logged', 'true');
    }

    private removeData() {
        this.name = '';
        localStorage.removeItem('name');
        localStorage.removeItem('logged');
    }

    public authorization = () => {
        if (this.loginValidated && this.passwordValidated) {
            for (const item in userData) {
                if ((this.userData[item].login === this.login)
                    && (this.userData[item].password === this.password)) {
                    this.logged = true;
                    this.validateData(true);
                    this.setData.call(this, this.userData[item].name);
                    return true;
                }
            }
        }
        return false;
    };
}
