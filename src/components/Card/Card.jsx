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
      <div>
        <div className={css.name}>
        <h2>{name}</h2>
        <p>{price}</p>
        <button></button>
        </div>
        <div className={css.rating}>
        <p> {rating}</p>
        <p>(Reviews)</p>
        <p>{location}</p>
        </div>
        <h3>The pictures shown here are example vehicles of the respective.</h3>
        <ul>
          <li> {adults} adults</li>
          <li> {transmission}</li>
          <li> {engine}</li>
          <li>{details.kitchen}kitchen</li>
          <li>{details.beds}beds</li>
          <li>{details.airConditioner}AC</li>
          <li> {children}</li>
          
          {/*  */}
          {/* <li>Форма: {form}</li> */}
          {/* <li>Длина: {length}</li> */}
          {/* <li>Ширина: {width}</li> */}
          {/* <li>Высота: {height}</li> */}
          {/* <li>Объем бака: {tank}</li> */}
          {/* <li>Расход топлива: {consumption}</li> */}
        </ul>
        
        {/* <p>{description}</p> */}
        


        </div>
      </div>
    );
  }
  