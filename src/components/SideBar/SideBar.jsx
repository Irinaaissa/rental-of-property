import React from 'react';
import Input from "../Location/Location";
import Filters from "../Filters/Filters";
import css from "./SideBar.module.css";

export default function SideBar({ onFilterChange }) {
    return (
        <div className={css.sideBar}>
            <Input />
            <Filters onFilterChange={onFilterChange} />
        </div>
    );
}
