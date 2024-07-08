import { Link, NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
    return(
        <div className={css.container}>
           <b className={css.text}> Ooops! Not found!</b>
           <NavLink className={css.link} to = "/" > Back tu home page !
           </NavLink>
        </div>
    )
    }