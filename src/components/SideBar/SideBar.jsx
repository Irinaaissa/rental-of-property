import Filters from "../Filters/Filters";
import Input from "../Location/Location";
import css from "./SideBar.module.css"

export default function SideBar(){
  
    return(
        <div className={css.sideBar}>
            
            <Input/>
            <Filters/>
        </div>
    )
}