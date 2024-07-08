import css from "./VehicleEquipment.module.css"
import detailsData from '../Data/initialContacts.json';
import { useState } from "react";

export default function VehicleEquipment() {
    const [details] = useState(detailsData);
    return (
        <div>
            <p className={css.text}>  Vehicle equipment</p>
            <ul>
                <li>{details.airConditioner}</li>
                <li>{details.vbathroom}</li>
                <li>{details.kitchen}</li>
                <li>{details.beds}</li>
                <li>{details.TV}</li>
                <li>{details.CD}</li>
                <li>{details.radio}</li>
                <li>{details.shower}</li>
                <li>{details.toilet}</li>
                <li>{details.freezer}</li>
                <li>{details.hob}</li>
                <li>{details.microwave}</li>
            </ul>
        </div>
    )
}