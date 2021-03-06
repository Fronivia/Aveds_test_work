import React from 'react';

export interface ICardsInformation {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    text: string,
    key: number
}

export enum FormTypes {
    TEXT = "text",
    PASSWORD = "password"
}

