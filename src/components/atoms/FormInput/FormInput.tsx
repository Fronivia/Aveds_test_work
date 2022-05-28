import React from 'react';
import styles from './FormInput.module.scss';
import clsx from 'clsx';
import { FormTypes } from '@src/constants/types';

interface IFormInputProps {
    description: string
    type: FormTypes,
    changeHandler: React.ChangeEventHandler<HTMLInputElement>
}

export const FormInput: React.FC<IFormInputProps> = (
    { description, type, changeHandler },
) => (
    <label className={clsx(styles.label)}> {description}
        <input
            className={clsx(styles.input)}
            type={type}
            placeholder={description}
            onChange={changeHandler}
        />
    </label>
);

