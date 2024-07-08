import VehicleEquipment from "../VehicleEquipment/VehicleEquipment"
import css from "./Filters.module.css"
export default function Filters(){
    return(
        <div>
          <p className={css.filters}>  Filters</p>  
          <VehicleEquipment/>
        </div>
    )
}