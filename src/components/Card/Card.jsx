import css from "./Card.module.css"
export default function Card({
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews
}) {
    return (
        <div className={css.card}>
            <div>
                {gallery && gallery.length > 0 && (
                    <img src={gallery[0]} alt={`${name} image`} className={css.galleryImage} />
                )}
            </div>
            <div className={css.cardInfo}>
                <div className={css.name}>

                    <h2>{name}</h2>
                    <div className={css.price}>
                        <p>{price}</p>
                        <button>f</button>
                    </div>
                </div>
                <div className={css.rating}>
                    <p> {rating}</p>
                    <p>(Reviews)</p>
                    <p>{location}</p>
                </div>
                <p className={css.text}>The pictures shown here are example vehicles of the respective.</p>
                <div>
                    <ul className={css.list}>
                        <li>
                            <button className={css.listButton}>{adults} adults</button>
                        </li>
                        <li>
                            <button className={css.listButton}>{transmission}</button>
                        </li>
                        <li>
                            <button className={css.listButton}>{engine}</button>
                        </li>
                        <li>
                            <button className={css.listButton}>{details.kitchen} kitchen</button>
                        </li>
                        <li>
                            <button className={css.listButton}>{details.beds} beds</button>
                        </li>
                        <li>
                            <button className={css.listButton}>{details.airConditioner} AC</button>
                        </li>
                    </ul>
                </div>
                {/* <p>{description}</p> */}

                <button className={css.button}>Show more</button>

            </div>
        </div>
    );
}
