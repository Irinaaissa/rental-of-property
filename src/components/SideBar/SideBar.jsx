import React from 'react';
import Location from "../Location/Location";
import Filters from "../Filters/Filters";

import css from "./SideBar.module.css";

export default function SideBar({ onFilterChange }) {
    return (
        <div className={css.sidebar}>
            <Location/>
            <Filters onFilterChange={onFilterChange} />
        </div>
    );
}
