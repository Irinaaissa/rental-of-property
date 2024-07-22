

import React from 'react';
import spritePath from '../../assets/react.svg';
import css from "./FeaturesItem.module.css";
import { equipmentList } from '../Helpers/equipmentList';

export default function FeaturesItem({
    form,
    length,
    width,
    height,
    tank,
    consumption,
    adults,
    children,
    engine,
    transmission,
    details = {} // Додаємо значення за замовчуванням для details
}) {
    return (
        <div>
            <div>
                <ul className={css.list}>
                    {equipmentList.map((item, index) => (
                        details[item.key] && details[item.key] !== 0 && (
                            <li key={index}>
                                <button className={css.listButton}>
                                    <svg
                                        className={css.icon}
                                        width="16"
                                        height="16"
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
            </div>
            <div>
                <h2>Vehicle details</h2>
                <ul>
                    <li>Form: {form}</li>
                    <li>Length: {length}</li>
                    <li>Width: {width}</li>
                    <li>Height: {height}</li>
                    <li>Tank: {tank}</li>
                    <li>Consumption: {consumption}</li>
                </ul>
            </div>
        </div>
    );
}

