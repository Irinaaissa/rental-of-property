import React, { useState } from 'react';
import css from "./VehicleEquipment.module.css";
import spritePath from '../../assets/react.svg'; // Переконайтеся, що шлях до SVG правильний
import { equipmentList, vehicleTypes } from '../Helpers/equipmentList';

export default function VehicleEquipment({ details, form, onApplyFilters }) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    if (!details) {
        return <p>Loading...</p>;
    }

    const handleFilterClick = (label) => {
        setSelectedFilters(prevFilters => {
            if (prevFilters.includes(label)) {
                return prevFilters.filter(filter => filter !== label);
            } else {
                return [...prevFilters, label];
            }
        });
    };

    const applyFilters = () => {
        onApplyFilters(selectedFilters);
    };

    return (
        <div>
            <div>
                <p className={css.text}>Vehicle equipment</p>
                <ul className={css.list}>
                    {equipmentList.map((item, index) => (
                        details[item.key] && details[item.key] !== 0 && (
                            <li key={index}>
                                <button
                                    className={`${css.listButton} ${selectedFilters.includes(item.label) ? css.selected : ''}`}
                                    onClick={() => handleFilterClick(item.label)}
                                >
                                    <svg
                                        className={css.icon}
                                        width="32"
                                        height="32"
                                        aria-label="btn icon"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <use href={`${spritePath}#${item.icon}`} />
                                    </svg>
                                    {details[item.key]} {item.label}
                                </button>
                            </li>
                        )
                    ))}
                </ul>

                <p className={css.text}>Vehicle type</p>
                <ul className={css.list}>
                    {vehicleTypes.map((type, index) => (
                        <li key={index}>
                            <button
                                className={`${css.listButton} ${selectedFilters.includes(type.label) ? css.selected : ''}`}
                                onClick={() => handleFilterClick(type.label)}
                            >
                                <svg
                                    className={css.icon}
                                    width="40"
                                    height="28"
                                    aria-label="btn icon"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <use href={`${spritePath}#${type.icon}`} />
                                </svg>
                                {type.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={applyFilters} className={css.applyButton}>
                Apply Filters
            </button>
        </div>
    );
}
