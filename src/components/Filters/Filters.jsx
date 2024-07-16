import React, { useState } from 'react';
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import css from "./Filters.module.css";
import cardsData from '../Data/initialContacts.json';

export default function Filters({ onFilterChange }) {
    const handleApplyFilters = (selectedFilters) => {
        onFilterChange(selectedFilters);
    };

    return (
        <div>
            <p className={css.filters}>Filters</p>
            <VehicleEquipment details={cardsData[0]?.details} form={cardsData[0]?.form} onApplyFilters={handleApplyFilters} />
        </div>
    );
}
