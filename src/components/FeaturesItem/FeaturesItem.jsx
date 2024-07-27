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
                    {equipmentList.map((item, index) => {
                        const value = details[item.key];
                        return value !== undefined && value !== null && value !== 0 ? (
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
                                     {item.label}
                                </button>
                            </li>
                        ) : null;
                    })}
                </ul>
            </div>
            <div>
                <h2 className={css.vehicleDetails}>Vehicle details</h2>
                <table className={css.products}>
                    <tr>
                        <td>Form</td>
                        <td>{form}</td>
                    </tr>
                    <tr>
                        <td>Length</td>
                        <td>{length}</td>
                    </tr>
                    <tr>
                        <td>Width</td>
                        <td>{width}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{height}</td>
                    </tr>
                    <tr>
                        <td>Tank</td>
                        <td>{tank}</td>
                    </tr>
                    <tr>
                        <td>Consumption</td>
                        <td>{consumption}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
