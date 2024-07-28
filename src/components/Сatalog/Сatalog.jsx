import { useState, useEffect } from 'react';
import SideBar from "../SideBar/SideBar";
import Board from "../Board/Board";
import css from "./Catalog.module.css";

export default function Catalog() {
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (selectedFilters) => {
        console.log("Selected Filters in Catalog:", selectedFilters);
        setFilters(selectedFilters);
    };

    useEffect(() => {
        console.log("Filters updated in Catalog:", filters);
    }, [filters]);

    return (
        <div className={css.container}>
            <SideBar onFilterChange={handleFilterChange} />
            <Board filters={filters} />
        </div>
    );
}
