import { Link } from "react-router-dom";
import css from "./Home.module.css"
import img from "../../components/img/rickyrecap.jpg";

export default function Home() {
    return (
      <section className={css.container}>
          <div className={css.titleContainer}>
          
            <h1 className={css.title}>
            Motorhome: Your dream of traveling becomes a reality!{"       "}
             <Link to="/catalog" className={css.carContainer}>
             <span className={css.accent}>House on wheels</span></Link> 
            </h1>
            <div className={css.home}>
            <p className={css.text}>Imagine freedom of movement without restrictions! With our mobile home, you can enjoy the comfort of your own home while traveling anywhere in the world. Feel comfortable wherever you are - from the mountain tops to the sea coast.</p>
            
            <img src={img} alt="camp" className={css.img} />
            </div>
          </div>
        </section>
    );
  }