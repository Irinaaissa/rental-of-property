import Board from "../Board/Board";
import SideBar from "../SideBar/SideBar";
import css from "./Catalog.module.css"

export default function Catalog() {

    return (
    <div className={css.container}> 
 <SideBar />
 <Board />
    </div>
   
   
    )
}