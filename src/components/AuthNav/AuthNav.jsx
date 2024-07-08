import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx"
import { TbTruckDelivery } from "react-icons/tb";

export default function AuthNav() {
    const makeLinc = ({ isActive })=>{
        return clsx(css.link, isActive && css.isActive)
    };
    return (
        <div >

            <header className={css.header}>
                <TbTruckDelivery />
                <div className={css.auth}>
                    <NavLink className={makeLinc} to="/">
                        <span className={css.text}> Home  </span>
                    </NavLink>
                    <NavLink className={makeLinc} to="/catalog">
                        <span className={css.text}> Сatalog </span>
                    </NavLink>
                    <NavLink className={makeLinc} to="/favorites">
                        <span className={css.text}> Favorites</span>
                    </NavLink>
                </div>

            </header>
        </div>
    );
}