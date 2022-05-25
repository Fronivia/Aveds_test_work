import React from "react";
import { NavItem } from "@components/atoms/NavItem/NavItem";
import { CONTACTS_PAGE } from "@src/constants/routes";

export const Navbar: React.FC = () => {
    return (
        <nav>
            <NavItem path={CONTACTS_PAGE} text="Контакты"/>
        </nav>
    );
};
