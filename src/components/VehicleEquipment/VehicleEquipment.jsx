import React, { useState } from 'react';
import css from "./VehicleEquipment.module.css";
import spritePath from '../../assets/react.svg'; // Убедитесь, что путь к SVG правильный

export default function VehicleEquipment({ details, form, onApplyFilters }) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    if (!details) {
        return <p>Loading...</p>;
    }

    const equipmentList = [
        { icon: 'icon-AC', label: 'AC', value: details.airConditioner },
        { icon: 'icon-Vertical', label: 'vbathroom', value: details.vbathroom },
        { icon: 'icon-Vertical-1', label: 'kitchen', value: details.kitchen },
        { icon: 'icon-beds', label: 'beds', value: details.beds },
        { icon: 'icon-Vertical-3', label: 'TV', value: details.TV },
        { icon: 'icon-Vertical-4', label: 'CD', value: details.CD },
        { icon: 'icon-Vertical-c', label: 'radio', value: details.radio },
        { icon: 'icon-Vertical-c2', label: 'shower', value: details.shower },
        { icon: 'icon-Vertical-conr', label: 'toilet', value: details.toilet },
        { icon: 'icon-Vertical-er', label: 'freezer', value: details.freezer },
        { icon: 'icon-Vertical-9', label: 'hob', value: details.hob },
        { icon: 'icon-Vertical-co10', label: 'microwave', value: details.microwave }
    ];

    const vehicleTypes = [
        { icon: 'Van', label: 'Van' },
        { icon: 'Fully-Integrated', label: 'Fully Integrated' },
        { icon: 'Alcove', label: 'Alcove' }
       
    ];

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
            <div >
                <p className={css.text}>Vehicle equipment</p>
                <ul className={css.list}>
                    {equipmentList.map((item, index) => (
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
                                {/* {item.value} */}
                                 {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <p className={css.text}>Vehicle type</p>
                <ul className={css.list}>
                    {vehicleTypes.map((type, index) => (
                        <li key={index}
                        
                        >
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
