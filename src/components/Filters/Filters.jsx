import React from 'react';
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import css from "./Filters.module.css";

export default function Filters({ onFilterChange }) {
    const handleApplyFilters = (selectedFilters) => {
        onFilterChange(selectedFilters);
    };

    return (
        <div>
            <p className={css.filters}>Filters</p>
            <VehicleEquipment onApplyFilters={handleApplyFilters} />
        </div>
    );
}
