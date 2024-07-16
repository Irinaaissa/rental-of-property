import { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Board from "../Board/Board";
import css from "./Catalog.module.css";

export default function Catalog() {
    const [filter, setFilter] = useState([]);

    const handleFilterChange = (selectedFilters) => {
        console.log("Selected Filters in Catalog:", selectedFilters); // Добавлено
        setFilter(selectedFilters);
    };

    return (
        <div className={css.container}>
            <SideBar onFilterChange={handleFilterChange} />
            <Board filter={filter} />
        </div>
    );
}
